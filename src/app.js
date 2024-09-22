const express = require('express');
const connectDB = require("./config/database")

const app = express();
const User = require('./models/user');


app.post("/signup",async (req,res) => {

    const user = new User( {
        firstName :"Sachin",
        lastName :"Tendulkar",
        emailId :"sachin@gmail.com",
        password :"123",
        age:25,
        gender:"Male",
        _id:"007"
    });

    try{
        await user.save();
        res.send("User added successfully")
    } catch(err){
        res.status(400).send("Error saving the user:",+err.message);

    }




})

connectDB().then(() => {
    console.log("Database connection established");  
    app.listen(7777,() => {
        console.log('Server is running on port 7777....');
    }); 
}).catch(err => {
    console.log("Database connection error: " + err);   
})




