const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const secret = require('../config').secret;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: {
        type: String,
        lowercase: true,
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        index: true,
        trim: true,
        required: "User Name is Required"
    },
    email: {
        type: String,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true,
        trim: true,
        required: "Valid Email Address is Required"
    },
    password: {
        type: String,
        lowercase: true,
        required: "String is Required",
        validate: [
            function (input) {
              return input.length >= 6;
            },
            "Longstring should be longer."
          ],
        },
}, { timestamps: true });

mySchema.plugin(uniqueValidator);
UserSchema.plugin(uniqueValidator, { message: 'is already taken.' });

UserSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.generateJWT = function () {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign({
        id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime() / 1000),
    }, secret);
};

UserSchema.methods.toAuthJSON = function () {
    return {
        username: this.username,
        email: this.email,
        token: this.generateJWT(),
        bio: this.bio,
        image: this.image
    };
};

// This creates our model from the above schema, using Mongoose's model method
const user = mongoose.model("userLog", UserSchema);
// Export the Todo model
module.exports = user;