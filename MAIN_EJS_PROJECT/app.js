const mongoose=require('mongoose');
const urlSchema=new mongoose.Schema({
    originalUrl:{
        type:String,
        require:true
    },
    shortUrl:{
        type:String,
        required:true,
        unique:true
    }
});