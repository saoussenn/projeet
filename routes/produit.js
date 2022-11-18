const express = require('express');
const produit =  require ('../models/produit');
const router = express.Router();
const {produitRules,validation} = require("../middelwares/validator");

const isAuth = require("../middelwares/passport");

// get all produit

router.get('/produit',async(req, res) => {

 try {
    const searchedProduit = await produit.find()
    res.send({searchedProduit,msg:'all produit'})
 } catch (error) {
    console.log(error);
    res.status(400).send({msg:'error getting all produit'})
      
 }
})

// add produit
 
router.post('/add',produitRules(),validation, async (req, res) => {
    try {
        const newProduit = new produit(req.body)
        let result = await newProduit.save();
        res.send({produit:result,msg:'produit added successfully'})
        
    } catch (error) {
        console.log(error);
        res.status(400).send({msg:'error saving produit'})
        
    }
}
    )

    
// get all produit by filter
router.post('/allProduit', async (req, res)=> {
  console.log(req.body)
    try {
        const result = await produit.find(req.body)
        res.send({allProduit:result,msg:'all produit'})
        
    } catch (error) {
        console.log(error);
        res.status(400).send({msg:'error getting all produit'}) 
    }
})
//get produit by category
router.get("/:categorie", async (req, res) => {
    try {
      const result = await produit.find({ categorie: req.params.categorie })
      res.send({ produit: result, msg: "get all produit by category" });
    } catch (error) {
      console.log(error);
      res.status(400).send({msg:'error getting produit by category'})

    }
  });

// update produit
router.put('/update/:id',async(req,res) => {
  
    try {
        const result = await produit.findByIdAndUpdate({_id:req.params.id},{$set:req.body},{new:true});
        res.send({produit:result,msg:"produit updated successfully"})
        
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "can not update the produit" });

    }
})
// delete produit
router.delete('/delete/:id',async (req,res) => {
    try {
        const result = await produit.findByIdAndDelete({ _id: req.params.id,});
        res.send({msg:"produit deleted successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "can not delete the produit"})
        
    }
})
//add file to produit
router.post("/addfiles", async (req, res) => {
    try {
      const newfiles= new Files({
       
        files: req.body.galerie,
    
      });
      let result = await newfiles.save();
      res.send({ result: result, msg: "files added" });
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router






