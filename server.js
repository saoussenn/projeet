const express=require("express");
const passport = require("passport");
const cors = require("cors");
const connectDB=require('./confg/dbconnect')
const  app = express();
require('dotenv').config();


// connect to DB
connectDB();


//server
const PORT = process.env.PORT;

// routes
app.use(express.json());
app.use(cors());

app.use(passport.initialize());
app.use("/user",require("./routes/user"))
app.use('/produit',require('./routes/produit'));


app.listen(process.env.PORT, (err) => {

 err
 ? console.log(err)
 : console.log(`server is running on ${PORT}`);
});