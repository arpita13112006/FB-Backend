const http=require("http");
const fs=require("fs");
const url=require("url");
http.createServer((req,res)=>{
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
    default:
            res.end("404 Page Not Found");
}

}).listen(7000,'localhost',(err)=>{
    if(err){
        console.log(err);
    }
    console.log("server started at  http://localhost:7000 successfully")
});







const fs=require("fs");
const http=require("http");
const url=require("url");
http.createServer((req,res)=>{
    switch(req.url){
        case'/':
        fs.readFile("./main/component/home.html","utf8",(err,page)=>{
            if(err){
                res.end();
            }else{
                res.write(page);
                res.end();
            }
        }
);
break;
        case'/about':
        fs.readFile("./main/component/about.html","utf8",(err,page)=>{
            if(err){
                res.end();
            }else{
                res.write(page);
                res.end();
            }
        });
        break;
        default:
            res.end("404 page not found");

    }
}).listen(9000,'localhost',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("server successfully run at http://localhost:9000")
    }
});
