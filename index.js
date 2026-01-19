const fs=require("fs");
// const fh=fs.openSync("secfb","w");
// fs.writeFileSync(fh,"i am arpita");
// fh.close(fh);

// fs.writeFileSync("secfb","GLA University");   //create bhi krta h file uar write bhi
// console.log(fs.readFileSync("secfb","utf8"));

// fs.appendFileSync("secfb"," is best university");  //data last se add hota hai
// console.log(fs.readFileSync("secfb","utf8"));

// fs.unlinkSync("secfb"); //delete the file

// fs.copyFileSync("secfb","mili");  // copy ho gya nye file mili me

// fs.renameSync("secfb","newfile");   //secfb old file ko new file rename kr diya 

// const fd=openSync("dummy.txt","w+")
// fs.writeFileSync(fd,"hello")


// fs.writeFileSync("dummy.txt","hello",{encoding:"utf-8",flag:"w"}); //apneap close ho jayega
// const data=fs.readFileSync("dummy.txt","utf-8");
// console.log(data);


fs.writeFile("dummy.txt","data hello",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log("file written successfully");
    }
})


