const express=require("express");
const app=express();
const reqAge=require("./middleware/middleware");
const checklogin=require("./middleware/checklogin");
const router=express.Router();
// router.use(reqAge);
app.get("/",(req,res)=>{
    res.send("welcome to home page");
})
app.get("/dashboard", checklogin, (req, res) => {
    res.send("Welcome to Dashboard");
});
app.get("/about",reqAge,checklogin,(req,res)=>{
    res.send("welcome to about page");
})
router.get("/contact",reqAge,(req,res)=>{
    res.send("welcome to contact page");
})
app.use(router);
app.listen(8124);