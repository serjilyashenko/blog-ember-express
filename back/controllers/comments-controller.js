const BaseController = require('./base-controller');
const url = require('url');

class CommentsController extends BaseController {

    getAll(req, res) {
        const currentArticle = req.originalUrl.split('/')[3];
        const criteria = {article: currentArticle};

        return this._getAll(req, res, criteria);
    }

}

module.exports = CommentsController;
