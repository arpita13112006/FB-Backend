const express=require("express");
const app=express();
const reqAge=require("./middleware/middleware");
const router=express.Router();
router.use(reqAge);
app.get("/",(req,res)=>{
    res.send("welcome to home page");
})
app.get("/about",reqAge,(req,res)=>{
    res.send("welcome to about page");
})
router.get("/contact",(req,res)=>{
    res.send("welcome to contact page");
})
app.use(router);
app.listen(8124);