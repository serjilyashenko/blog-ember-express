const mongoose = require('../lib/mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    created: {type: Date, default: Date.now},
    author: {type: String, default: 'Anon'},
    title: String,
    short: String,
    post: String,
    // comments: [{type: ObjectId, ref: 'comment'}],
    // commentsCount: {type: Number, default: 0},
});

module.exports = mongoose.model('Article', articleSchema);
