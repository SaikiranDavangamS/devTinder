const express = require('express');

const app = express();

// GET /users => it checks all the app.xxx("watching route") functions 

app.use("/",(req,res,next) => {
    // res.send("Handling / route")
    next()
})

app.get("/user",(req,res)=> {
    console.log("Handling / user route") 
    next();
},(req,res,next) => {
    next()
})

app.use("/user",(req,res,next) => {
    // route handler
    // res.send("Route handler 1"
    next()
},(req,res,next) => {
    res.send("2nd Route handler")
})



app.listen(7777,() => {
    console.log('Server is running on port 7777....');
});


