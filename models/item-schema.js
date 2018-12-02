const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PackingItemSchema = new Schema({

    item: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        trim: true
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
    const packingItem = mongoose.model("packingItem", PackingItemSchema);
    // Export the links model
    module.exports = packingItem;