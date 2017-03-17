const BaseController = require('./base-controller');
const url = require('url');

class CommentsController extends BaseController {

    getAll(req, res) {
        const baseUrl = req.baseUrl || '';
        const articleId = baseUrl.split('/')[3];

        this.Model.find({article_id: articleId}, (err, records) => {
            // TODO: error

            const payload = {
                [this.modelName]: records,
            };

            res.send(payload);
        });
    }

}

module.exports = CommentsController;
