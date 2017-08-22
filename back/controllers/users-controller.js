const BaseController = require('./base-controller');
const MODEL_NAME = 'user';

class UsersController extends BaseController {

    constructor() {
        super(MODEL_NAME);
    }

    _serializeResponse(content, meta) {
        this.hidePassword(content);

        return super._serializeResponse(...arguments);
    }

    hidePassword(content) {
        if (Array.isArray(content)) {
            content.forEach(record => record.password = null);
        } else {
            content.password = null;
        }
    }

}

module.exports = UsersController;
