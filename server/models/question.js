const mongoose = require('mongoose');
const  question = new mongoose.Schema({
    "title":String,
    "answer":String,
    "choices":[{
        "title":String
    }]
})

module.exports = mongoose.model('questions',question);