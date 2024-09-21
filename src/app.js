const express = require('express');

const app = express();

// This will only handle GET call to /user

app.get("/user",(req,res) => {
    res.send({firstName: 'John', lastName: 'Saini'})
})


// this will match all the HTTP method API calls to /test

app.post("/user",(req,res) =>{
    console.log("Save Data tot the database");
    res.send("Data successfully saved to the database"); 

})

app.delete("/user",(req,res) =>{
    res.send("Data successfully deleted from the database");
})
app.use("/test",(req,res) => {
    res.send("Hello from the server")
}) // request handler

app.use("/hello",(req,res) => {
    res.send("Hello Hello Hello")
}) // request handler

app.use("/",(req,res) =>{
    res.send("Namaste nodejs")
})


app.listen(7777,() => {
    console.log('Server is running on port 7777....');
});


