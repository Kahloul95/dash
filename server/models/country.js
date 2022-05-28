const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const countrySchema = new Schema({
 
 country :{type: String, required:true},
 //ID : {type: Number},
 ID : {type: String}
});
const Country = mongoose.model('Country', countrySchema);
module.exports = Country;