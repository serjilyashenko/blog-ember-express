const MODELS_PATH = '../models';

class BaseController {

    constructor(modelName = null) {
        const modelPath = MODELS_PATH + '/' + modelName;
        this.Model = require.main.require(modelPath);
        this.modelName = modelName;
    }

    getAll(req, res) {
        this.Model.count((err, recordsCount) => {
            // TODO: error handler

            const metaNormalized = this._normalizeMeta(req.query, recordsCount);
            const metaSerialized = this._serializeMeta(metaNormalized, recordsCount);

            this.Model.find({})
                .limit(metaNormalized.limit)
                .skip(metaNormalized.offset)
                .sort(metaNormalized.sortOptions)
                .exec((err, records) => {
                    // TODO: error handler

                    const payload = {
                        [this.modelName]: records,
                        meta: metaSerialized,
                    };

                    res.send(payload);
                });
        });
    }

    get(req, res) {
        const id = req.params.id;
        this.Model.findById(id, (err, record) => {
            // TODO: error
            res.send(record);
        });
    }

    create(req, res) {
        const Model = this.Model;
        const recordPrototype = req.body;

        console.log('>> ', recordPrototype);

        const record = new Model(recordPrototype);

        record.save().then((record) => {
            res.send(record);
        });
        // TODO: errors or 200 status
    }

    update(req, res) {
        const Model = this.Model;
        const id = this._getIdByReqest(req);
        const newProperties = req.body;

        Model.findById(id, (err, record) => {
            Object.assign(record, newProperties);

            record.save((err, updatedRecord) => {
                // TODO: error handler
                res.send(updatedRecord);
            });
        });
    }

    destroy(req, res) {
        const id = this._getIdByReqest(req);

        this.Model.findById(id, (err, record) => {
            // TODO: error handler
            record.remove(() => {
                res.sendStatus(200);
            });
        });
    }

    _getIdByReqest(reques) {
        return reques.params.id;
    }

    _getSortOptions(order = '_id:asc') {
        const orderBy = order.split(':')[0];
        const orderType = order.split(':')[1] === 'desc' ? -1 : 1;

        return {[orderBy]: orderType};
    }

    _normalizeMeta(query = {}, recordsCount) {
        const limit = Number(query.limit) || 50;
        const page = Number(query.page) || 1;
        const sortOptions = this._getSortOptions(query.order);

        const maxPage = Math.ceil(recordsCount / limit);
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
}

module.exports = BaseController;
