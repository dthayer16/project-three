require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 8080;

require("./services/passport.js");
// Initialize Express
const app = express();

//Models
const $ = require("./models");

// Parse request body as JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Make public a static folder
app.use(express.static("app/build"));


// Mongoose Connection
const db = require("./config/connection");
db(process.env.MONGODB_URI || "mongodb://localhost/test");

// Routes
app.use(require("./routes"));

app.get("*", function(req, res){
    res.sendFile(path.resolve(__dirname, "app", "build", "index.html"));
})

// Start the server
app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});
