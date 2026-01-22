// printmsg=require("./first.js");
// printmsg()

// variable=require("./first.js");

// const data=require("./first.js"); //default
// data.info()

// const data=require("./first.js");
// data.add();

// const data=require("./first.js");
// data.mili();

// const data=require("./first.js");
// data.addition();

const http=require("http");

const server=http.createServer((req,res) => {
    console.log(req);
    res.end("server started successfully");
});
server.listen(8000,'localhost',(err) => {
    if(err){
        console.log(err);
    }
    console.log("server started at http://localhost:8000 successfully");
});
