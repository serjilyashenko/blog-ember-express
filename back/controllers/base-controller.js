const token = require('../lib/token');
const MODELS_PATH = '../models';

class BaseController {

    constructor(modelName = null) {
        const modelPath = MODELS_PATH + '/' + modelName;
        this.Model = require.main.require(modelPath);
        this.modelName = modelName;
    }

    getAll(req, res) {
        return this._getAll(req, res);
    }

    _getAll(req, res, criteria = {}) {
        this.Model.count((err, recordsCount) => {
            // TODO: error handler

            const metaNormalized = this._normalizeMeta(req.query, recordsCount, this);
            const metaSerialized = this._serializeMeta(metaNormalized, recordsCount);

            this.Model.find(criteria)
                .limit(metaNormalized.limit)
                .skip(metaNormalized.offset)
                .sort(metaNormalized.sortOptions)
                .exec((err, records = []) => {
                    // TODO: error handler

                    const payload = this._serializeResponse(records, metaSerialized);

                    res.send(payload);
                });
        });
    }

    get(req, res) {
        const id = req.params.id;
        this.Model.findById(id, (err, record) => {
            // TODO: error

            const payload = this._serializeResponse(record);

            res.send(payload);
        });
    }

    create(req, res) {
        return this._create(req, res)
    }

    _create(req, res, mixin = {}) {
        if (!this._isAuthorized(req)) {
            res.status(401).send('Not Authorized');
            return;
        }

        const {body = {}} = req;
        const Model = this.Model;
        const newRecord = body[this.modelName];

        if (!newRecord) {
            res.send(422);
        }

        const record = new Model(Object.assign(newRecord, mixin));

        record.save()
            .then((record) => {
                const payload = this._serializeResponse(record);

                res.send(payload);
            })
            .catch(() => {
                res.send(422);
            });
        // TODO: errors or 200 status
    }

    update(req, res) {
        return this._update(req, res);
    }

    _update(req, res) {
        if (!this._isAuthorized(req)) {
            res.status(401).send('Not Authorized');
            return;
        }

        const {body = {}, params = {}} = req;
        const Model = this.Model;
        const id = params.id;
        const newRecord = body[this.modelName];

        if (!newRecord) {
            res.send(422);
        }

        // Refactor it
        Model.findById(id, (err, record) => {
            Object.assign(record, newRecord);

            return record.save((err, updatedRecord) => {
                return updatedRecord;
            });
        })
            .then((updatedRecord) => {
                const payload = this._serializeResponse(updatedRecord);

                res.send(payload);
            })
            .catch(() => {
                res.sendStatus(422);
            });
    }

    destroy(req, res) {
        if (!this._isAuthorized(req)) {
            res.status(401).send('Not Authorized');
            return;
        }

        const id = this._getIdByRequest(req);

        this.Model.findById(id, (err, record) => {
            // TODO: error handler

            return record;
        })
            .then(record => record ? record.remove() : Promise.resolve())
            .then(() => res.send({}));
    }

    _isAuthorized(req) {
        return req.header('X-CSRF-Token') === token;
    }

    _getIdByRequest(request) {
        return request.params.id;
    }

    _getSortOptions(order = 'created:asc') {
        const orderKey = order.split(':')[0];
        const orderType = order.split(':')[1] === 'desc' ? -1 : 1;

        const orderBy = orderKey in this.Model.schema.obj ? orderKey : 'created';

        return {[orderBy]: orderType};
    }

    _normalizeMeta(query = {}, recordsCount = 0) {
        const limit = Number(query.limit) || 50;
        const page = Number(query.page) || 1;
        const sortOptions = this._getSortOptions(query.order);

        const maxPage = Math.ceil(recordsCount / limit) || 1;
        const currentPage = Math.min(page, maxPage);

        const offset = Math.max((currentPage - 1) * limit);

        return {limit, offset, sortOptions, currentPage, maxPage};
    }

    _serializeMeta({limit, sortOptions = {}, currentPage, maxPage} = {}, recordsCount) {
        const sortKeys = Object.keys(sortOptions);
        const order = sortKeys.reduce((order, key) => {
            const sortType = sortOptions[key] === -1 ? 'desc' : 'asc';
            return order.concat(`${key}:${sortType}`);
        }, '');

        return {
            page: {
                current: currentPage,
                total: maxPage,
            },
            total: recordsCount,
            limit: limit,
            order: order,
        };
    }

    _serializeResponse(content, meta) {
        return {
            meta,
            [this.modelName]: content,
        };
    }
}

module.exports = BaseController;
