const express = require("express")
const app = express()

app.listen(3000, ()=>{console.log('Kegs are tapped...')})

app.get("/", (req, res) => {
    res.send('Welcome to the Gitpub App!')
})