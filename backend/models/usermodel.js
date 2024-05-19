const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {
        required: true,
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin'],
    },

    address: {
        type: String,
        required: true,
    },
    image:{
        type: Object,

    },
    sendCode: {
        type: String,
        default: null,
    }
}, {
    timestamps: true,
});

const userModel = model('user', userSchema);

module.exports = userModel;
