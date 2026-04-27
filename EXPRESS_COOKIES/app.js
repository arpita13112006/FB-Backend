const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
app.use(cookieParser());
app.get('/setcookie',(req,res)=>{
    res.cookie('name','John',{maxAge:24*60*60*1000,httpOnly:true,secure:false});
    res.send('Cookie has been set');
})
app.get('/getcookie',(req,res)=>{
    const data=req.cookies.name;
    if(data)
        res.send(data);
    else
        res.send('No cookie found');
})
app.get('/deletecookie',(req,res)=>{
    res.clearCookie('name');
    res.send('Cookie has been deleted');
})
app.listen(5400);
