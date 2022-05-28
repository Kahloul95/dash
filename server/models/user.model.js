const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
userName: {type: String },
userTelNo:{type: Number},
userEmail: {type: String},
date: {type: Date, default: Date.now}
}, {
timestamps: true
});
const User = mongoose.model('User', userSchema);
module.exports = User;