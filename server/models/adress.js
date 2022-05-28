const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adressSchema = new Schema({
 
    country :{type: String, required:true},
    municipality : []
});



const Adress = mongoose.model('Adress', adressSchema);
module.exports = Adress;