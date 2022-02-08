const express = require("express");

require("dotenv").config();

const app = express();

app.use( express.static("public"))

app.all("/", (request, response)=>{
    response.sendFile(__dirname + "/views/index.html")
})

//This responds to all HTTP verbs
app.all("/hobbies", (req, res)=>{
    res.sendFile(__dirname + "/views/hobbies.html")
})
app.all("/hobbies/crochet", (req, res)=>{
    res.sendFile(__dirname + "/views/crochet.html")
})

// Build the server here
app.listen(3000, ()=>{console.log("App listening on port 3000")})