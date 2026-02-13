// const express = require('express');
// const app=express();
// app.get("/",(req,res)=>{
//     res.send("hello welcome to home page!");
// })
// app.get("/about",(req,res)=>{
//     res.send("hello welcome to about page!");
// })
// app.get("/contact",(req,res)=>{
//     res.send(`
//         <h1>Hello welcome to contact page!</h1>
//         <a href='/about'>Click here for about page</a>
//     `);
// });

// app.get("/search",(req,res)=>{
//     console.log(req.query.name);
//     res.send("hello search page found!"+req.query.age);
// })
// app.use((req,res)=>{
//     res.status(404).send("page not found");
// })

// app.get('/user',(req,res)=>{
//       const user={
//         name:'arpita',
//         age:'22'
//       };
//       res.json(user);
// });
// app.listen(4200);

const express =require('express');
const app=express();
const path=require('path');
const path2=path.join(__dirname,'components');
app.use(express.static(path2));
app.get('/',(req,res)=>{
    res.send(path.join(__dirname,'Components',index.html));
});
app.get('/submit',(req,res)=>{
    console.log(req.query.username);
     console.log(req.query.age);
    res.send("form submitted successfully");
});
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'Components',about.html));
});
app.get('/search',(req,res)=>{
    console.log(req.query.name);
    res.send("hello search page found!"+req.query.name);
})
app.use((req,res)=>{
    res.status(404).send("page not found");
})
app.listen(6300);
