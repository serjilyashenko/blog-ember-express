const BaseController = require('./base-controller');
const url = require('url');
const MODEL_NAME = 'comment';

class CommentsController extends BaseController {

    constructor() {
        super(MODEL_NAME);
    }

    getAll(req, res) {
        const currentArticle = req.originalUrl.split('/')[3];
        const criteria = {article: currentArticle};

        return this._getAll(req, res, criteria);
    }

}

module.exports = CommentsController;
