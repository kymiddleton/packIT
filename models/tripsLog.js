const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TripsSchema = new Schema({
    tripName: {
        type: String,
        trim: true
    },
    tripList: {
        type: Object,
        trim: true,
    },

});
// This creates our model from the above schema, using Mongoose's model method
const trips = mongoose.model("tripsLog", TripsSchema);
// Export the Todo model
module.exports = trips;