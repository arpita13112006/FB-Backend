const checklogin=(req,res,next)=>{
    const isloggedin=req.query.login;
    if(!isloggedin){
        res.send("please login first");
    }
    next();
};
module.exports=checklogin;