const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const mosSchema = new Schema({
    username: {type: String, required:true},
    fullname: {type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    phone:{type: Number},
    address:{type:String}
})
const Mos = mongoose.model('Mos',mosSchema);
module.exports = Mos;