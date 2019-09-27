const db = require("../models");

module.exports = {

    findSavedEvent: function (req, res) {
        db.SavedEventful
            .find(req)
            .then(dbEvent => res.json(dbEvent))
            .catch(err => res.status(422).json(err));
    },
    findSavedYelp: function (req, res) {
        db.SavedYelp
            .find(req)
            .then(dbYelp => res.json(dbYelp))
            .catch(err => res.status(422).json(err));

    },
    findEventById: function (req, res) {
        db.SavedEventful
            .findById(req.params.id)
            .then(dbEvent => res.json(dbEvent))
            .catch(err => res.status(422).json(err))
    },
    findYelpById: function (req, res) {
        db.SavedYelp
            .findById(req.params.id)
            .then(dbYelp => res.json(dbYelp))
            .catch(err => res.status(422).json(err))
    },
    saveEvent: function (req, res) {
        db.SavedEventful
            .create(req)
            .then(dbEvent => res.json(dbEvent))
            .catch(err => res.status(422).json(err))
    },
    saveYelp: function (req, res) {
        db.SavedYelp
            .create(req)
            .then(dbYelp => res.json(dbYelp))
            .catch(err => res.status(422).json(err))
    },
    removeEvent: function (req, res) {
        db.SavedEventful
            .findById({_id: req.params.id})
            .then(dbEvent => dbEvent.remove())
            .then(dbEvent => res.json(dbEvent))
            .catch(err => res.status(422).json(err))

    },
    removeYelp: function (req, res) {
        db.SavedYelp
            .findById({_id: req.params.id})
            .then(dbYelp => dbYelp.remove())
            .then(dbYelp => res.json(dbYelp))
            .catch(err => res.status(422).json(err))

    },


};