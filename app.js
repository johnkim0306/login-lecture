"user strict"

// modules
const express = require("express");
const app = express();

const PORT = 3000;

// Routing
const home = require("./routes/home");

// app setting
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); //use -> middle 

module.exports = app;