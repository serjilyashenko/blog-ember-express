const mongoose = require('mongoose');
const config = require.main.require('../config/config.json');

mongoose.Promise = global.Promise;

mongoose.connect(config.mongoose.uri);

module.exports = mongoose;
