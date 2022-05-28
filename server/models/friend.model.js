const mongoose = require('mongoose');
const FriendSchema = mongoose.Schema({
    username: {type: String, required:true},
    fullname: {type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    phone:{type: Number},
    address:{type:String}

});
module.exports = mongoose.model('Friend', FriendSchema);