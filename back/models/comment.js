const mongoose = require('../lib/mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    created: {type: Date, default: Date.now},
    author: {type: String, default: 'Anon'},
    text: String,
});

module.exports = mongoose.model('Comment', commentSchema);
