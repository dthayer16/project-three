var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var SavedEventfulSchema = new Schema({
    key: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    url: {
        type: String
    },
    date: {
        type: String
    }
});

// This creates our model from the above schema, using mongoose's model method
var SavedEventful = mongoose.model("SavedEventful", SavedEventfulSchema);

// Export the Article model
module.exports = SavedEventful;