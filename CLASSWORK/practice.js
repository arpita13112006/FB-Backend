// const http=require("http");
// const url=require("url");
// const fs=require("fs");

// http.createServer((req,res)=>{
// const da=new Date();
// console.log(da);
// fs.appendFile("serverlog.txt", da + " " + req.url + "\n", (err)=>{
//         if (err) throw err;
//     }
// );
// console.log(req.url);
// res.write("<h1>welcome to our website</h1>");
// res.end();
// }).listen(4000,'localhost',(err)=>{
// if(err){console.log("error occured",err)}
// else {console.log("server started at http://localhost:4000 successfully")};
// });

const http=require("http");
const url=require("url");
const fs=require("fs");
http.createServer((req,res)=>{
    const da=new Date();
    console.log(da);
    fs.appendFile("serverlog.txt",da+" "+req.url,(err)=>{
        if(err) throw err;
    });
    console.log(req.url);
    res.write("<h3>sadfghh</h3>");
    res.end();
}).listen(2000,'localhost',(err)=>{
    if(err){
        console.log("err",err);
    }else{("server started at http://localhost:2000 successfully");
    }
});