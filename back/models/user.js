const mongoose = require('../lib/mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
});

userSchema.pre('save', function(next) {
    Object.keys(this.schema.paths).forEach(key => {
        const defaultValue = this.schema.paths[key].options.default;

        if (defaultValue && this[key] === null) {
            this[key] = defaultValue;
        }
    });

    next();
});

module.exports = mongoose.model('User', userSchema);
