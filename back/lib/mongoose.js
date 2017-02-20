const mongoose = require('mongoose');
const config = require.main.require('../config/config.json');

mongoose.connect(config.mongoose.uri);

module.exports = mongoose;
