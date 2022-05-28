const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const concourSchema = new Schema({
    username: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    duration: {type: Number, required: true},
    date: {type: Date, required: true}
},{
    timestamps:true
});
const Concour = mongoose.model('Concour',concourSchema);
module.exports = Concour;