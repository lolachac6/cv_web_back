const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let personalSkillSchema = new Schema ({
    id: Number, 
    name: String, 
    level: Number
    
});

module.exports = mongoose.model('personalSkills',personalSkillSchema)