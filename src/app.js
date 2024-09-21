const express = require('express');

const {adminAuth,userAuth} =  require('./middlewares/auth');

const app = express();

app.use("/admin",adminAuth)
app.get("/user",userAuth,(req,res) => {
    res.send("user Data Sent")
})
app.get("/user/login",(req,res) => {
    res.send("user logged in successfully")
})

app.get("/admin/user",(req,res) => {
    res.send("user Data Sent")
})
app.get("/admin/getAllData",(req,res) => {
    res.send("All Data Sent")
})

app.get("/admin/deleteUser",(req,res) => {
    res.send("Deleted a user")
})




app.listen(7777,() => {
    console.log('Server is running on port 7777....');
});


