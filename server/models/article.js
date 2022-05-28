const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }, 

    photo: {
        type: String
    },

    birthdate: {
        type: String
    }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;