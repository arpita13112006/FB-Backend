const express=require('express');
const app=express();
app.get("/",(req,res,next)=>{
    res.send("welcome to home page");
})
app.use((req,res,next)=>{
    const error=new Error("page not found");
    error.statuscode=404;
    error.status="fail";
    next(error);
}
)
app.listen(4100);