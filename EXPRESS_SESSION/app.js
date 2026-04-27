
const express = require('express');
const app = express();

const session = require('express-session'); 
const FileStore = require('session-file-store')(session);  
const cookieParser = require('cookie-parser');
const path = require('path');
const ejs = require("ejs");
app.set("view engine", "ejs"); 

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser()); 

app.use(
    session({
        secret: "mysecretkey",
        resave: false,
        saveUninitialized: false,
        
    })
);

app.get('/', (req, res) => {
    res.render('login');
});
app.get('/home', (req, res) => {
    if(!req.session.user){
        return res.redirect('/');
    }else{
    res.render('home',{username:req.session.user});
    }
});
app.post('/login',(req,res)=>{
    const {username}=req.body;
    req.session.user=username;
    res.redirect('/home');
})
app.get('/profile',(req,res)=>{
    if(!req.session.user){
        return res.redirect('/');
    }
    res.render('profile');
})
app.get('/logout',(req,res)=>{
    req.session.destroy(()=>{
    res.render('logout');
    })
})
app.listen(4200, () => {
    console.log("Server running on port 4200");
});