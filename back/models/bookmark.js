const mongoose = require('../lib/mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    owner: {type: String, default: 'Anon'},
    name: String,
    article: {type: Schema.Types.ObjectId, ref: 'Article', index: true},
});

module.exports = mongoose.model('Bookmark', commentSchema);
