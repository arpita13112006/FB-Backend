const express=require('express');
const app=express();
const errorHandler=require('./middleware/error');
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
app.use(errorHandler);
app.listen(4100);