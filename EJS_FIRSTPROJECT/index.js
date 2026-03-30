const express=require('express');
const app=express();
app.set('view engine','ejs');
// app.get('',(req,res)=>{
//     res.render('home',{name:'don'});
// })
// app.listen(3000);
app.use((req,res,next)=>{
    console.log("hello middleware 1....");
    next();
});
app.use((req,res,next)=>{
    console.log("hello middleware 2.....");
    next();
});
app.get('/',(req,res)=>{
    let student={
        name:'arpita',
        age:19,
        email:'arpita.patra_cs24@gla.ac.in',
        hobbies:['singing','dance','drawing']
    };
    res.render('home',{ stu: student});
});
app.listen(3500,()=>{
    console.log("server running on port 3500");
});