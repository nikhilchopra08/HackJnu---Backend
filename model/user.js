const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the name"]
    },
    email: {
        type: String,
        required: [true, "Please enter the Contact email id"],
        unique: [true, "email address already taken"]
    },
    password: {
        type: String,
        required: [true, "Please enter the passward"]
    },
    number: {
        type: String
    },
    account: {
        type: String,
    }

}, {
    timestamps: true,
});

module.exports = mongoose.model("User", userSchema); 