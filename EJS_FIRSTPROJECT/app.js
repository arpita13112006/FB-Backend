// using mongodb
const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/myDB')
.then(() => {
    console.log("Mongo Connected");
})
.catch((err) => {
    console.log("Error occurred:", err);
});
app.listen(6700, () => {
    console.log("Server running on port 6700");
});


//schema

const newSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    contact:{
        required:true,
        type:Number,
        unique:true
    }
});
const User=mongoose.model("User",newSchema);
app.post('/users',async(req,res)=>{
    const data=req.body;
    const user=await User.create(data);
    return res.json(user);
})
app.put('/users',)
module.exports=User;