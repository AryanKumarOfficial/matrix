const mongoose = require("mongoose");
const {models} = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter name"]
    },
    email: {
        type: String,
        required: [true, "Please enter email"]
    },
    message: {
        type: String,
        required: [true, "Please enter message"]
    }
}, {timestamps: true});

const contact = mongoose.models.contact || mongoose.model("contacts", contactSchema);

module.exports = contact;