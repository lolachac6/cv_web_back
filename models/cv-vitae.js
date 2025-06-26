const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let cv = new Schema ({
    id:Number, 
    title:String,
    function:String, 
    dates: String,
    datesEnd: String, 
    place: String,
    skill: [String],
    image: String,
    type:String

}

)

module.exports = mongoose.model('cv',cv);