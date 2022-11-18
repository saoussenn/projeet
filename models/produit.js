const mongoose = require('mongoose');
const schema = mongoose.Schema;

const produitSchema = new schema({
        id_user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          },

        user_name:{
            type:String
        },

        support:{
            type:[String],
            required:true,
        },

        accessoire:{
            type:[String] ,
            required:true,
            
        },
        fils:{
            type:[String],
            required:true,
        },
        toile:{
            type:[String],
            required:true,
        },
        prix: {
            type: String,
            
        },
        livraison:{
            type:[String] ,
            required:true
        },
    
        
        kits:{
            type:[String],
            required:true
        },

        produit_name:{
            type:String
            
        },

        Nouveautés: { type: String },
        Coussin: { type: String },
        Vétements: { type: String },
        
       
        
    },
    { timestamps: true }
    )

    module.exports = mongoose.model("produit", produitSchema);


 