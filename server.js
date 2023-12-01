const express = require("express");
const {accessControl, defaultMiddleware} = require("./middleware");
const users = [
    {id: 1, name: "Işıl Güneş", place:"Tokat"},
    {id: 2, name: "İkbal Delibaş", place:"Rize"}
];
const app = express();
const PORT = 5000;

app.use(express.json());

//app.use(accessControl); //Uygulama kapsamı
//! GET Request
//! localhost:5000/users
app.get("/users", [accessControl,defaultMiddleware],(req, res, next) => {
    //res.send("<h1>Hello Express!</h1>");
    res.json({
        success: true,
        data: users
    });
});
// app.get("/products", (req, res, next)=>{
//     res.send("Products");
// });
app.post("/users",(req, res,next)=>{
    console.log(req.body);

    users.push(req.body);
    const user = req.body;
    users.push(user);
    res.json({
        success: true,
        data : users
    });
});

// users/1
app.put("/users/:id",(req, res,next)=>{
    const id = parseInt(req.params.id);
    for(let i = 0; i<users.length; i++) {
        if(users[i].id === id){
            users[i] = {
                ...users[i],
                ...req.body
            };
        }
    }
    //console.log(req.params.id);
    res.json({
        success: true,
        data : users
    });
});

app.delete("/users/:id",(req, res,next)=>{
    const id = parseInt(req.params.id);
    for(let i = 0; i<users.length; i++) {
        if(users[i].id === id){
            users.splice(i, 1);
        }
    }
    res.json({
        success: true,
        data : users
    });
})
app.listen(PORT, ()=>{
    console.log("server started: " + PORT);
});