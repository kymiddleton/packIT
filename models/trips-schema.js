const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TripsSchema = new Schema({
    tripName: {
        type: String,
        unique: true,
        trim: true
    },
    tripList: {
        clothing: Array,
        footwear: Array,
        personal: Array,
        documents: Array,
        gadgets: Array,
        miscellaneous: Array
    },

});
// This creates our model from the above schema, using Mongoose's model method
const trips = mongoose.model("trips-schema", TripsSchema);
// Export the Todo model
module.exports = trips;