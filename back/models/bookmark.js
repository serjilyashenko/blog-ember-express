const mongoose = require('../lib/mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    name: String,
    article: {type: Schema.Types.ObjectId, ref: 'Article', index: true},
    user: {type: Schema.Types.ObjectId, ref: 'User', index: true},
});

module.exports = mongoose.model('Bookmark', commentSchema);
