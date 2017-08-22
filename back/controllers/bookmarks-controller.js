const BaseController = require('./base-controller');
const url = require('url');
const MODEL_NAME = 'bookmark';

class BookmarksController extends BaseController {

    constructor() {
        super(MODEL_NAME);
    }

    static _getCurrentUserId(req) {
        // todo: maybe needs some refactoring
        return req.originalUrl.split('/')[3];
    }

    getAll(req, res) {
        const currentUser = BookmarksController._getCurrentUserId(req);
        const criteria = {user: currentUser};

        return this._getAll(req, res, criteria);
    }

    create(req, res) {
        const currentUser = BookmarksController._getCurrentUserId(req);
        const mixin = {user: currentUser};

        if (req.body.user) {
            delete req.body.user;
        }

        return this._create(req, res, mixin);
    }

}

module.exports = BookmarksController;
