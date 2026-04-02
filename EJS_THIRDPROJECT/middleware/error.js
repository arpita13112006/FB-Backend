const errorHandler=(err,req,res,next)=>{
    err.statuscode=err.statuscode || 500;
    err.status=err.status || "Error";
};
module.exports=errorHandler;