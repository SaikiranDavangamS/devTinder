const express = require('express');

const app = express();

app.use("/user",(req,res,next) => {
    // route handler
    // res.send("Route handler 1")
    console.log("Handling the route user1");
    
    next()


},(req,res,next)=> {
    //route handler 2 
    console.log("Handling the route user 2");
    res.send(" 2nd Response!!!")

},(req,res,next)=>{
    console.log("Handling the route user 3");
    
})

app.listen(7777,() => {
    console.log('Server is running on port 7777....');
});


