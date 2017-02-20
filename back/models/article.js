const mongoose = require('../lib/mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    created: {type: Date, default: Date.now},
    author: {type: String, default: 'Anon'},
    title: String,
    post: String,
});

module.exports = mongoose.model('Article', articleSchema);
