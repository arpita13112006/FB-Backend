const errorHandler=(err,req,res,next)=>{
    err.statuscode=err.statuscode || 500;
    err.status=err.status || "Error";
    res.status(err.statuscode).json({
        status:err.status,
        message:err.message
    });
};
module.exports=errorHandler;