const express = require("express")
const app = express();
const drinks = require("./models/drinks");

app.listen(3000, ()=>{console.log('Kegs are tapped...')})

app.get("/", (req, res) => {
    res.send('Welcome to the Gitpub App!')
})

app.get("/drinks", (req, res) =>{
    res.send(drinks)
})