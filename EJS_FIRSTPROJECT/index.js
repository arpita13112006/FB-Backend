//json format rest api

const express=require('express');
const app=express();
const fs=require('fs');
// app.set('view engine','ejs');
const users=require('./users_400.json')
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.get('',(req,res)=>{
//     res.render('home',{name:'don'});
// })
// app.listen(3000);

// app.use((req,res,next)=>{
//     console.log("hello middleware 1....");
//     next();
// });
// app.use((req,res,next)=>{
//     console.log("hello middleware 2.....");
//     next();
// });
// app.get('/',(req,res)=>{
//     let student={
//         name:'arpita',
//         age:19,
//         email:'arpita.patra_cs24@gla.ac.in',
//         hobbies:['singing','dance','drawing']
//     };
//     res.render('home',{ stu: student});
// });

app.get('/',(req,res)=>{
    res.send("welcome to our website");
})

app.get('/api/users',(req,res)=>{
    return res.json(users);
})
app.get('/user',(req,res)=>{
    const html=`
    <ul>
    ${users.map(user=>`<li>${user.name}</li>`).join(' ')}
    </ul>
    `
    res.send(html);
})

app.get('/api/users/:id',(req,res)=>{
    const id=Number(req.params.id);
    console.log(id);
    const user=users.find(users=>
        users.id===id
    );
    return res.json(user);
})

// app.post('/users',(req,res)=>{
//     //we will do this with mongodb
//     const newData={
//         "id": 401,
//         "name": "User401",
//         "email": "user1@example.com",
//         "phone": "+917207805264",
//         "address": "Street 1, City 1, India",
//         "age": 58
//     }
//     fs.appendFile('users_400.json',JSON.stringify(newData),(err)=>{
//         console.log(err);
//     });
//     res.send("file updated");
// })

// app.post('/api/users', (req, res) => {
//     const data = req.body; 
//     console.log(data); 
//     return res.json({ msg: "success", data: data });
// });

app.post('/api/users', (req, res) => {
    const data = req.body;
    fs.writeFile(
        "users_400.json",
        JSON.stringify(data),
        (err) => {
            if (err) return res.json({ msg: "error" });
            return res.json({ msg: "success",data:data });
        }
    );
});


app.patch('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    fs.readFile('users_400.json', 'utf-8', (err, data) => {
        let users = JSON.parse(data);
        const user = users.find(u => u.id === id);
        if (!user) return res.send("user not found");
        fs.writeFile('users_400.json', JSON.stringify(users), () => {
            res.send("PATCH done");
        });
    });
});


app.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    fs.readFile('users_400.json', 'utf-8', (err, data) => {
        let users = JSON.parse(data);
        users = users.filter(u => u.id !== id);
        fs.writeFile('users_400.json', JSON.stringify(users), () => {
            res.send("DELETE done");
        });
    });
});


app.put('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    fs.readFile('users_400.json', 'utf-8', (err, data) => {
        let users = JSON.parse(data);
        const index = users.findIndex(u => u.id === id);
        if (index === -1) return res.send("user not found");
        users[index] = {
            id,
            name: req.body.name,
            age: req.body.age
        };
        fs.writeFile('users_400.json', JSON.stringify(users), () => {
            res.send("PUT done");
        });
    });
});


app.listen(3500,()=>{
    console.log("server running on port 3500");
});

// GET 👉 Data lena (Read)👉 Server se data fetch karte hain
// POST 👉 Naya data add karna (Create)👉 Server me new data create karte hain
// PUT 👉 Pura update (Replace)👉 Existing data ko completely replace karta hai
// PATCH 👉 Thoda update (Partial)👉 Sirf kuch fields update hoti hain
// DELETE 👉 Data remove karna👉 Server se data delete karte hain