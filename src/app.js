const express = require('express');


const app = express();

app.use("/",(err,req,res,next) => {
    if(err){
        // log your error
        res.status(500).send("something went wrong")
    }
})

app.get("/getUserData", (req, res) => {
  try{
    throw new Error("xxxxx")
    res.send("User Data Sent")
  }
  catch(err){
    res.status(500).send("Something went wrong")
  }
})





app.listen(7777,() => {
    console.log('Server is running on port 7777....');
});


