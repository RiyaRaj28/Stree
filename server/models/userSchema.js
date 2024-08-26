const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,         // Converts the email to lowercase before saving
        trim: true, 
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 40
    },
    firstName: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 20,
        trim: true
    },
    lastName: {
        type: String,
        required : true,
        trim: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

const User = new mongoose.model('User', userSchema);
module.exports = User;