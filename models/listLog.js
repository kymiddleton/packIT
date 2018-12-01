const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ListSchema = new Schema({

    item: {
        type: String,
        trim: true,
    },
    weather: {
        type: Array,
        trim: true,
    },
    packing: {
        type: Array,
        trim: true,
    },
    destination: {
        type: Array,
        trim: true
    },
    travel: {
        type: Array,
        trim: true
    }
});
    // This creates our model from the above schema, using Mongoose's model method
    const list = mongoose.model("listLog", ListSchema);
    // Export the links model
    module.exports = list;