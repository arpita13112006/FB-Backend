const express = require('express');
const app=express();
app.get("/",(req,res)=>{
    res.send("hello welcome to home page!");
})
app.get("/about",(req,res)=>{
    res.send("hello welcome to about page!");
})
app.get("/contact",(req,res)=>{
    res.send(`
        <h1>Hello welcome to contact page!</h1>
        <a href='/about'>Click here for about page</a>
    `);
});

app.get("/search",(req,res)=>{
    console.log(req.query.name);
    res.send("hello search page found!"+req.query.age);
})
app.use((req,res)=>{
    res.status(404).send("page not found");
})
app.listen(5200);

//express ke andar json ko kese render kroge