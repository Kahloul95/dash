const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const newsSchema = new Schema({
    title:{type: String},
    type:{type : String},
    desc:{type: String},
    img:{type: String},
    country:{type: String},
    munici:{type: String},
    lat:{type: String},
    lng:{type: String},
    gender:{type:String, possibleValues:['male', 'femaile']},
    date:{type: Date, default: Date.now}
},{
    timestamps: true
});
const New = mongoose.model('New', newsSchema);
module.exports = New;