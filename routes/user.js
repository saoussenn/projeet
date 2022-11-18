const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { loginRules, validation, registerRules } = require("../middelwares/validator");
require("dotenv").config()

const isAuth = require("../middelwares/passport");


// register user
//router.post('/register',registerRules(),validation, async(req,res) => {
//const { name,lastName, phone, email, password, adress } = req.body;
//try{
// const newUser = new User({ name, lastName, phone, email,password,adress});
// await newUser.save();
// res.status(200).send({newUser, msg:"user is saved"});
//}catch (error) {
// res.status(500).send("can not user");
// }
//});



//register email


router.post('/register', registerRules(), validation, async (req, res) => {
  const { name, lastName, phone, email, password, adress } = req.body;
  try {
    const newUser = new User({ name, lastName, phone, email, password, adress });

    // check if the email exist
    const searchedUser = await User.findOne({ email });

    if (searchedUser) {
      return res.status(400).send({ msg: 'this email address already exists' })
    }


    // hash password

    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, genSalt);

    newUser.password = hashedPassword;


    // save the user
    const newUserToken = await newUser.save();

    // generate a token
    const payload = {
      _id: newUserToken._id,
      name: newUserToken.name,
    };
    console.log(process.env.SecretOrKey)
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600 * 1000 * 24 * 7,
    });

    res.status(200).send({ newUserToken, msg: 'user is saved', token: `Bearer ${token}` });

  } catch (error) {
    console.log(error);
    res.status(500).send({ error});
  }
});

//login

router.post('/login', loginRules(), validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    // find if the user exists
    const searchedUser = await User.findOne({ email });
    // if the email is not exist
    if (!searchedUser) {
      return res.status(400).send({ msg: "bad Credential" });
    }
    // password are equals
    const match = await bcrypt.compare(password, searchedUser.password);
    if (!match) {
      return res.status(400).send({ msg: "bad Credential" });
    }

    // create a token
    const payload = {
      _id: searchedUser._id,
      name: searchedUser.name,
    };
    console.log(process.env.SecretOrKey)
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600 * 1000 * 24 * 7,

    });

    //send the user

    res.status(200).send({ user: searchedUser, msg: "success", token: `Bearer ${token}` });



  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: 'can not get the user' });

  }

});

//Put methode update user
//router.put("/update/:id", async (req, res) => {
//try {
//let result = await User.findByIdAndUpdate(
// {
//  _id: req.params.id,
//},
// { $set: { ...req.body } },
// { new: true }
//);
//res.status(200).send({ newProfile: result, msg: "profile updated.." });
// } catch (error) {
// res.status(500).send("cannot update the profile..");
//console.log(error);
// }
//});

// get user by id
router.get("/get/:id", async (req, res) => {
  try {
    let result = await User.find({ id_user: req.params.id });
    res.send({ user: result, msg: " user by id" });
  } catch (error) {
    console.log(error);
  }
});

// get all user
router.get("/", async (req, res) => {
  try {
    let result = await User.find();
    res.send({ users: result, msg: "all users" });
  } catch (error) {
    console.log(error);
  }
});

// delete user
router.delete("/delete/:id", async (req, res) => {
  try {
    let result = await User.findByIdAndDelete({ _id: req.params.id, });
    res.send({ msg: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: error });
  }
});

//get current user
router.get("/current", isAuth(), (req, res) => {
  res.status(200).send({ user: req.user });
});

module.exports = router;