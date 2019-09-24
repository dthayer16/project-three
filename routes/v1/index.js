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
    const city = req.params.city;
    const eventfulKey = process.env.eventfulKey;
    const url = `http://api.eventful.com/json/events/search?app_key=${eventfulKey}&location=${city}&date=Future&category=music,comedy,family_fun_kids,festivals_parades,movies_film,food,art,holiday,attractions,community,singles_social,outdoors_recreation,performing_arts,animals,sports,other`;

    axios.get(url)
        .then(response => {
            console.log(response.data.events);
            res.status(200).send(response.data.events);
        })
        .catch(err => {
            res.status(422).json(err);
        });
});

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app

router.get("/yelp/:city", function (req, res) {

    const yelpKey = process.env.yelpKey;
    const searchRequest = {
        term: '',
        location: req.params.city
    };
    const client = yelp.client(yelpKey);

    client.search(searchRequest)
        .then(response => {

            // const firstResult = response.jsonBody;

            console.log(response.jsonBody);
            res.status(200).json(response.jsonBody)

        }).catch(err => {
            res.status(422).json(err);
        });
});

router.get("/flight", function (req, res) {

    const kajakKey = process.env.kajakKey;
    // const originOne = "SGN";
    // const destinationOne = "DAD";
    // const departDateOne = "2018-12-20";
    // const cabin = "e";
    // const currency = "USD";
    // const adults = "1";
    // const bags = "0";

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
            bags: '0',

        },
        headers: {
            "x-rapidapi-host": 'apidojo-kayak-v1.p.rapidapi.com',
            "x-rapidapi-key": kajakKey
        }

    }
    // const url = `https://apidojo-kayak-v1.p.rapidapi.com/flights/create-session?&origin1=${originOne}&destination1=${destinationOne}&departdate1=${departDateOne}&cabin=${cabin}&currency=${currency}&adults=${adults}&bags=${bags}`;

    // const settings = {
    //     "async": true,
    //     "crossDomain": true,
    //     "url": url,
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-host": "apidojo-kayak-v1.p.rapidapi.com",
    //         "x-rapidapi-key": kajakKey
    //     }
    // }

    // axios.get(settings)
    //     .then(response => {
    //         console.log(response)
    //         res.status(200).send(response);
    //     })
    //     .catch(err => {
    //         res.status(422).json(err);
    //     });

    request(options, function (err, response, body) {
        if (err) throw new Error(err);
        console.log(body)
        // res.json(body);
    })
});

router.get("/hotel", function (req, res) {

    const kajakKey = process.env.kajakKey;
    const rooms = "";
    const cityCode = "";
    const checkIn = "";
    const checkOut = "";
    const adults = "";
    const url = `https://apidojo-kayak-v1.p.rapidapi.com/hotels/create-session?airportcode=HAN&rooms=${rooms}&citycode=${cityCode}&checkin=${checkIn}&checkout=${checkOut}&adults=${adults}`

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-kayak-v1.p.rapidapi.com",
            "x-rapidapi-key": kajakKey
        }
    }

    axios.get(settings)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(err => {
            res.status(422).json(err);
        });
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

module.exports = router;