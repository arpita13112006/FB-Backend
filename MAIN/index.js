const http=require("http");
const fs=require("fs");
const url=require("url");
http.createServer((req,res)=>{
// console.log(req);
// res.end("server started ssuccesfully!");
// res.write("hello");
// res.end();
switch(req.url){
    case'/':
    fs.readFile('./component/home.html',(err,page)=>{
        if(err){
            res.end();
        }else{
            res.write(page);
            res.end();
        }
    });
    break;
    case'/about':
    fs.readFile('./component/about.html',(err,page)=>{
        if(err){
            res.end();
        }else{
            res.write(page);
            res.end();
        }
    });
    break;
}

}).listen(4500,'localhost',(err)=>{
    if(err){
        console.log(err);
    }
    console.log("server started at  http://localhost:4500 successfully")
});