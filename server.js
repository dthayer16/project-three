require("dotenv").config();

var express = require("express");
var mongoose = require("mongoose");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server

var PORT = process.env.PORT || 8080;

require("./services/passport.js");
// Initialize Express
var app = express();

//Models
var $ = require("./models");

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

// Functionality
//================================================================================================================
// Route for grabbing a specific User by id, populate it with it's note
app.get("/user/:id", function(req, res) {
    // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
    db.User.findOne({ _id: req.params.id })
    // ..and populate all of the notes associated with it
        .populate("SavedYelp")
        .populate("SavedEventful")
        .then(function(dbData) {
            // If we were able to successfully find an Article with the given id, send it back to the client
            res.json(dbData);
        })
        .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
});
//Delete Event Method
app.post("/event/delete/:id", function(req, res) {
    // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
    db.Article.findOne({ _id: req.params.id })
        .update({ saved: false })
        .then(function(dbArticle) {
            // If we were able to successfully find an Article with the given id, send it back to the client
            res.json(dbArticle);
        })
        .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
});

//Delete Yelp Method
app.post("/yelp/delete/:id", function(req, res) {
    // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
    db.Article.findOne({ _id: req.params.id })
        .update({ saved: false })
        .then(function(dbArticle) {
            // If we were able to successfully find an Article with the given id, send it back to the client
            res.json(dbArticle);
        })
        .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
});

//Route for getting saved Articles from the db
app.get("/saved", function(req, res){
    db.Article.find({"saved": true}, function(error, data) {
        let savedData = {
            article: data
        };
        console.log(savedData);
        res.render("saved", savedData);
    });
});



//Save single Yelp
app.post("/yelp/save/:id", function(req, res) {
    // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
    db.Article.findOne({ _id: req.params.id })
        .update({ saved: true })
        .then(function(dbArticle) {
            // If we were able to successfully find an Article with the given id, send it back to the client
            res.json(dbArticle);
        })
        .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
});
//Save single Event
app.post("/event/save/:id", function(req, res) {
    // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
    db.Article.findOne({ _id: req.params.id })
        .update({ saved: true })
        .then(function(dbArticle) {
            // If we were able to successfully find an Article with the given id, send it back to the client
            res.json(dbArticle);
        })
        .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
});

// Start the server
app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});
