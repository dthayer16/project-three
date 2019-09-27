var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var SavedYelpSchema = new Schema({
    yelpId: {
        type: String
    },
    name: {
        type: String
    },
    url: {
        type: String
    },
    price: {
        type: String
    },
    image_url: {
        type: String
    },
    rating: {
        type: Number
    },
    review_count: {
        type: String
    }
});

// This creates our model from the above schema, using mongoose's model method
var SavedYelp = mongoose.model("SavedYelp", SavedYelpSchema);

// Export the Article model
module.exports = SavedYelp;