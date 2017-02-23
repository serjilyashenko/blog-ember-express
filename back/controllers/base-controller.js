const MODELS_PATH = '../models';

class BaseController {

    constructor(modelName = null) {
        const modelPath = MODELS_PATH + '/' + modelName;
        this.Model = require.main.require(modelPath);
    }

    getAll(req, res) {
        this.Model.find((err, records) => {
            // TODO: error
            res.send(records);
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
        // TODO: not necessary, if mongoose resolves it
        const recordPrototype = this.getModelPropsFromPayload(Model, req.body);

        const record = new Model(recordPrototype);

        record.save();
        // TODO: errors or 200 status
        res.sendStatus(200);
    }

    update(req, res) {
        const Model = this.Model;
        const id = this._getIdByReqest(req);
        // TODO: not necessary, if mongoose resolves it
        const newProperties = this.getModelPropsFromPayload(Model, req.body);

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

    getModelPropsFromPayload(Model, payload) {
        const objKeys = Object.keys(Model.schema.obj);
        const payloadKeys = Object.keys(payload);

        const crossKeys = objKeys.filter((key) => {
            return payloadKeys.includes(key);
        });

        return crossKeys.reduce((res, key) => {
            res[key] = payload[key];
            return res;
        }, {});
    }

}

module.exports = BaseController;
