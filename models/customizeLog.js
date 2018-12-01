const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PacklistSchema = new Schema({

    listname: String,
    
    packinglist: {
        clothing: Array,
        footwear: Array,
        care: Array,
        documents: Array,
        gadgets: Array,
        misc: Array

    }
  
});
    // This creates our model from the above schema, using Mongoose's model method
    const packlist = mongoose.model("packList", PacklistSchema);
    // Export the  model
    module.exports = packlist;