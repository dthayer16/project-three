require("dotenv").config();

const router = require("express").Router();
const db = require("../../models");
const jwt = require("jsonwebtoken");
const config = require("../../config");
const passport = require("passport");
const { requireAuth, requireSignin } = require("../auth");
const axios = require("axios");
const yelp = require('yelp-fusion');
const request = require("request");
const savedController = require("../../controllers/savedController");

function tokenizer(user) {
    return jwt.sign(
        {
            sub: user
        },
        config.secret
    );
}

router.use("/user", require("./user"));

router.get("/events/:city", function (req, res) {
    console.log("event route hit");
    const city = req.params.city;
    const eventfulKey = process.env.eventfulKey;
    const url = `http://api.eventful.com/json/events/search?app_key=${eventfulKey}&location=${city}&date=Future&category=music,comedy,family_fun_kids,festivals_parades,movies_film,food,art,holiday,attractions,community,singles_social,outdoors_recreation,performing_arts,animals,sports,other`;

    axios.get(url)
        .then(response => {
            res.status(200).send(response.data.events);
        })
        .catch(err => {
            res.status(422).json(err);
        });
});

router.get("/yelp/:city", function (req, res) {

    const yelpKey = process.env.yelpKey;
    const searchRequest = {
        term: '',
        location: req.params.city,
        limit: 10,
        categories: 'food'
    };
    const client = yelp.client(yelpKey);

    client.search(searchRequest)
        .then(response => {
            res.status(200).json(response.jsonBody)
        }).catch(err => {
            res.status(422).json(err);
        });
});

router.get("/flight", function (req, res) {

    const kajakKey = process.env.kajakKey;

    var options = {
        method: 'GET',
        url: 'https://apidojo-kayak-v1.p.rapidapi.com/flights/create-session',
        qs: {
            origin1: 'BZN',
            destination1: 'SLC',
            departdate1: '2019-11-01',
            cabin: 'e',
            currency: 'USD',
            adults: '1',
            bags: '0'
        },
        headers: {
            "x-rapidapi-host": 'apidojo-kayak-v1.p.rapidapi.com',
            "x-rapidapi-key": kajakKey
        }

    };

    request(options, function (err, response, body) {
        if (err) throw new Error(err);
        // console.log(body)
        res.json(body);
    })
});

router.post("/signin", requireSignin, function (req, res) {

    //check if user exists
    db.User.findOne({ email: req.body.email }).then(dbUser => {
        if (dbUser === null) {
            res.status(400).send("BAD LOG IN, UNAUTHORIZED");
        } else {

            res.json({
                userId: dbUser._id,
                token: tokenizer(req.user),
                name: dbUser.name
            });
        }
    })
});

router.post("/signup", function (req, res) {
    const { name, email, password } = req.body;

    if (!email || !password || !name) {
        res.status(422).send({ error: "You must provide a name, email and password" });
    }

    db.User.findOne({ email })
        .then(dbuser => {
            // if the user exists return an error
            if (dbuser) {
                return res.status(422).send({ error: "Email already in use" });
            }
            //create new user object
            const user = new db.User({ name, email, password });
            // save the user
            user.save().then(user => {
                // respond with the success if the user existed
                res.json({ token: tokenizer(user) });
            });
        })
        .catch(err => {
            return next(err);
        });
});

// Save/Delete Functionality
//================================================================================================================
router.get("/saved", function(req, res) {
    // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
    db.User.find({})
    // ..and populate all of the notes associated with it
        .populate("SavedYelp", "SavedEventful")
        .then(function(dbUser) {
            // If we were able to successfully find an Article with the given id, send it back to the client
            res.json(dbUser);
        })
        .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
});

router.post("/saved/yelp", requireAuth, function(req, res){
    db.SavedYelp.create(req.body)
        .then(function(dbYelp){
            return db.User.findOneAndUpdate({ email: req.user.email }, { $push: {savedYelp: dbYelp._id}},
                { new: true });
        })
        .then(function(dbUser) {
            res.json(dbUser);
        })
        .catch(err=>console.log(err))
});
router.post("/saved/event", requireAuth, function(req, res){
    db.SavedEventful.create(req.body)
        .then(function(dbEventful){
            return db.User.findOneAndUpdate({ email: req.user.email }, { $push: {savedEventful: dbEventful._id}},
                { new: true });
        })
        .then(function(dbUser) {
            res.json(dbUser);
        })
        .catch(err=>console.log(err))
});

router.get("/saved/yelp", requireAuth, function(req, res){
    db.SavedYelp.find()
        .then(function(dbUser) {
           return res.json(dbUser);
        })
        .catch(err=>console.log(err))
});
router.get("/saved/event", requireAuth, function(req, res){
    db.SavedEventful.find()
        .then(function(dbUser) {
           return res.json(dbUser);
        })
        .catch(err=>console.log(err))
});

router.post("/saved/event/:id", requireAuth, function(req, res){
    db.SavedEventful.findOneAndDelete({ _id: req.params.id })
        .then(function(dbEventful){
            return res.json(dbEventful)
        })

        .catch(err=>console.log(err))
});



module.exports = router;