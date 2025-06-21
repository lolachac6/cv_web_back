const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let cv = new Schema ({
    title:String,
    dates: Date,
    datesEnd: Date, 
    place: String,
    skill: [String],
    image: String,

})

module.exports = mongoose.model('cv',cv);