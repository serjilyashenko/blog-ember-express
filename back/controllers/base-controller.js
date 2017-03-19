const MODELS_PATH = '../models';

class BaseController {

    constructor(modelName = null) {
        const modelPath = MODELS_PATH + '/' + modelName;
        this.Model = require.main.require(modelPath);
        this.modelName = modelName;
    }

    getAll(req, res) {
        const limit = req.query.limit || null;
        const offset = req.query.offset || null;
        const sortOptions = this._getSortOptions(req.query.order);

        return this.Model.find({})
            .limit(limit)
            .skip(offset)
            .sort(sortOptions)
            .exec((err, records) => {
                // TODO: error

                const payload = {
                    [this.modelName]: records,
                    meta: {
                        total: records.length,
                    },
                };

                res.send(payload);
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

}

module.exports = BaseController;
