const express = require('express');
const connectDB = require("./config/database")

const app = express();
const User = require('./models/user');

app.use(express.json());

app.post("/signup",async (req,res) => {

    const user = new User(req.body);

    try{
        await user.save();
        res.send("User added successfully")
    } catch(err){
        res.status(500).send('Error saving the user:'+err.message);
    }
});

// Get user by email

app.get("/user",async(req,res) => {
    const userEmail = req.body.emailId;

    try{
       const users = await User.findOne({emailId:userEmail});

       if(users.length === 0){
        res.status(404).send("User not found")
       } else {
        res.send(user)
       }

    }

    catch(err){
        res.status(400).send("Something went wrong",+err.message);
    }
})

// Feed API - GET / feed - get all the users from database

app.get("/feed",async(req, res) => {

    try{
        const users = await User.find({});
        res.send(users)

    } catch(err){
        res.status(400).send("Something went wrong",+err.message);
    }

})

app.delete("/user",async(req,res) => {
    const userId = req.body.userId;

    try{
        const user = await User.findByIdAndDelete(userId);
        res.send("User deleted successfully!!!")

        if(!user){
            res.status(404).send("User not found")
        } else {
            res.send(user)
        }
    }catch(err){
        res.status(400).send("Something went wrong",+err.message);
    }

})

app.patch('/user',async(req,res) => {
    const userId = req.body._id;
    const data = req.body

    try{
        await User.findByIdAndUpdate({_id:userId}, data)
        res.send("User updated successfully!!!")

    }catch(err){
        res.status(400).send("Something went wrong",+err.message);
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

