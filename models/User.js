const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//requires mongoose and creates new Schema.

const UserSchema = new Schema({
    tripname: {
        type: String,
        required: "You must have a username"
    },
    list: {
        type: Array,
    },

    // date: {
    //     type: Date,
    //     default: Date.now
    // },


    // `date` must be of type Date. The default value is the current date
});


// saves this model in a tweet, and will run when the var tweet is called, exports to index for use.
var User = mongoose.model('User', UserSchema);
module.exports = User;