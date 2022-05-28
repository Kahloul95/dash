const mongoose = require('mongoose');
const Country = require('./country');

const Schema = mongoose.Schema;
const municipalitySchema = new Schema({
    municipality :{type: String, required:true},
  //  Country:{type: mongoose.Schema.Types.ObjectId, ref: Country, required:true, index: true}
    Country:{type: String, ref: Country, required:true, index: true}
});
const Municipality = mongoose.model('Municipality', municipalitySchema);
module.exports = Municipality;