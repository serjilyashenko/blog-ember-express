const BaseController = require.main.require('../controllers/base-controller');

const MODEL_NAME = 'article';

module.exports = BaseController.extend({

    modelName: MODEL_NAME,

});
