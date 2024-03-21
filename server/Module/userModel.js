// import mongoose from 'mongoose'
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        unique: true
    },
    lastName: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: false,
        default: "user"
    }
}, { timestamps: true },
);

const User = mongoose.model('user', userSchema);

module.exports = User;

