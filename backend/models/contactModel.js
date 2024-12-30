const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
},{
    timestamps : true
});

const userContact = mongoose.model('Contact', contactSchema);

module.exports = userContact;
