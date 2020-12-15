const express = require("express");

const app = express();

// "/"- means home route directory
app.get("/", function(req,res){
    res.send("Hello");
});

app.get("/about", function(req,res){
    res.send("Hi, I am Pranav!");
});

app.get("/hobbies", function(req,res){
    res.send("I play football");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});