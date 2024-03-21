// import mongoose from 'mongoose'
const mongoose = require("mongoose")

const classSchema = new mongoose.Schema({
    className: {
        type: String,
        require: true,
    },
    staffName: {
        type: String,
        require: true,
        unique: true
    },
    startingTime: {
        type: String,
        require: true,
    },
    endingTime: {
        type: String,
        require: true,
    },
    location: {
        type: String,
        require: true
    },
    bookingFee: {
        type: String,
        require: false,
    }
}, { timestamps: true },
);

const classUserScheme = mongoose.model('classShudule', classSchema);

module.exports = classUserScheme;

