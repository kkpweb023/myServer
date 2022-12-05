const mongoose = require('mongoose');
const autoIncr = require('mongoose-auto-increment');

const StudSchema = mongoose.Schema({
    name:String,
    age:Number,
    email:String,Number
}); 

autoIncr.initialize(mongoose.connection);
StudSchema.plugin(autoIncr.plugin,'students');

module.exports = mongoose.model('students',StudSchema);

