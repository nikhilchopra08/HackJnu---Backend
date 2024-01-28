const mongoose = require("mongoose");

const ServiceSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the medicine name"],
    },
    Image: {
        type: String,
        required: [true, "Please enter the Doctor's image"]
    },
    desc: {
        type: String,
        required: [true, "Please enter the degree"]
    },
    duration: {
        type : String,
        required: [true, "Please enter the degree"]
    },
});

module.exports = mongoose.model("Service", ServiceSchema);