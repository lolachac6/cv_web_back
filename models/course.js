const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

let course = new Schema({
    id: Number, 
    title: String, 
    dates:  String,
    datesEnd:  String, 
    hours: Number,
    image:String,
    Skill: [String]
})




module.exports= mongoose.model('course',course);