const mongoose = require('../lib/mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    created: {type: Date, default: Date.now},
    author: {type: String, default: 'Anon'},
    text: String,
    article: {type: Schema.Types.ObjectId, ref: 'Article', index: true},
});

module.exports = mongoose.model('Comment', commentSchema);
