require("dotenv").config();

const axios = require("axios");
const yelp = require('yelp-fusion');
const router = require("express").Router();


router.get("/events/:city", function (req, res) {
    const city = req.params.city;
    const eventfulKey = process.env.eventfulKey
    const url = `http://api.eventful.com/json/events/search?app_key=${eventfulKey}&location=${city}&date=Future&category=music,comedy,family_fun_kids,festivals_parades,movies_film,food,art,holiday,attractions,community,singles_social,outdoors_recreation,performing_arts,animals,sports,other`;

    axios.get(url)
        .then(response => {
            res.status(200).send(response.data);
        })
        .catch(err => {
            res.status(422).json(err);
        });
});

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app

router.get("/yelp/:city", function (req, res) {

    const apiKey = process.env.yelpKey;
    const searchRequest = {
        term: '',
        location: req.params.city
    };
    const client = yelp.client(apiKey);

    client.search(searchRequest)
        .then(response => {
            console.log(response)
            res.status(200).json(response)
        }).catch(err => {
            res.status(422).json(err);
        });
});

router.get("/kajak", function (req, res) {

    const kajakKey = process.env.kajakKey;
    url = ""

    axios.get(url)
        .then(response => {
            res.status(200).send(response.data);
        })
        .catch(err => {
            res.status(422).json(err);
        });
})

module.exports = router;