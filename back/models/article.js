const mongoose = require('../lib/mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    created: {type: Date, default: Date.now()},
    author: {type: String, default: 'Joker'},
    title: {type: String, required: true},
    short: String,
    post: String,
    // comments: [{type: ObjectId, ref: 'comment'}],
    // commentsCount: {type: Number, default: 0},
});

articleSchema.pre('save', function(next) {
    Object.keys(this.schema.paths).forEach(key => {
        const defaultValue = this.schema.paths[key].options.default;

        if (defaultValue && this[key] === null) {
            this[key] = defaultValue;
        }
    });

    next();
});

module.exports = mongoose.model('Article', articleSchema);
