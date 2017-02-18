const BaseController = require.main.require('../controllers/base-controller');

const MODEL_NAME = 'articles';

module.exports = BaseController.extend({

    modelName: MODEL_NAME,

});
