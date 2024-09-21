const express = require('express');

const app = express();

app.use("/",(req,res) =>{
    res.send("Namaste nodejs")
})
app.use("/test",(req,res) => {
    res.send("Hello from the server")
}) // request handler

app.use("/hello",(req,res) => {
    res.send("Hello Hello Hello")
}) // request handler



app.listen(7777,() => {
    console.log('Server is running on port 7777....');
});


