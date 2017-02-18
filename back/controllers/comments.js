const BaseController = require.main.require('../controllers/base-controller');

const MODEL_NAME = 'comments';

module.exports = BaseController.extend({

    modelName: MODEL_NAME,

});
