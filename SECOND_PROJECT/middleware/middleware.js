const reqAge=(req,res,next)=>{
    const age=req.query.age;
    if(!age){
        res.send("please enter your age");
    }else if(age<18){
        res.send("you are not allowed to enter this page");
    }else{
        next();
    }
}
module.exports=reqAge;