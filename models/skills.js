const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let skillSchema = new Schema({
    id: Number,
    name: String,
    level: Number
});

module.exports = mongoose.model('skills',skillSchema);