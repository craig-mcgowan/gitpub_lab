const express = require("express")
const app = express();
const drinks = require("./models/drinks");
const food = require("./models/food")
app.listen(3000, ()=>{console.log('Kegs are tapped...')})

app.get("/", (req, res) => {
    res.render("home.ejs")
})
//DRINK INDEX
app.get("/drinks", (req, res) =>{
    res.render("drinks_index.ejs", {drinkList: drinks})
})
//DRINK SHOW
app.get("/drinks/:id", (req, res) => {
    res.render('drinks_show.ejs', {drink: drinks[req.params.id]})
})
//FOOD INDEX
app.get("/food", (req, res) => {
    res.render("food_index.ejs", { menu: food })
    
})
//FOOD SHOW
app.get("/food/:id", (req, res) => {
    res.render("food_show.ejs", {food: food[req.params.id]})
})