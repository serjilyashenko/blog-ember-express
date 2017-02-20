const MODELS_PATH = '../models';

class BaseController {

    constructor() {
        this.modelName = null;
    }

    get getAll() {
        return this._getAll.bind(this);
    }

    get get() {
        return this._get.bind(this);
    }

    get create() {
        return this._create.bind(this);
    }

    get update() {
        return this._update.bind(this);
    }

    get destroy() {
        return this._destroy.bind(this);
    }

    extend(child) {
        child.__proto__ = this;
        return child;
    }

    _getAll(req, res) {
        const Model = this._getModel(this.modelName);
        Model.find((err, records) => {
            // TODO: error
            res.send(records);
        });
    }

    _get(req, res) {
        const id = req.params.id;
        const Model = this._getModel(this.modelName);
        Model.findById(id, (err, record) => {
            // TODO: error
            res.send(record);
        });
    }

    _create(req, res) {
        const Model = this._getModel(this.modelName);
        const article = new Model({
            title: req.body.title,
            post: req.body.post,
        });

        article.save();
        // TODO: errors or 200 status
        res.sendStatus(200);
    }

    _update(req, res) {
        const id = this._getIdByReqest(req);
        const newRecord = req.body;

        const Model = this._getModel(this.modelName);
        Model.findById(id, (err, record) => {
            // TODO: error handler
            for (let field in record) {
                const newFieldValue = newRecord[field];
                // TODO: realize correct updateing of a record
                if (newFieldValue) {
                    record[field] = newFieldValue;
                }
            }
            record.save((err, updatedRecord) => {
                // TODO: error handler
                res.send(updatedRecord);
            });
        });
    }

    _destroy(req, res) {
        const id = this._getIdByReqest(req);
        const Model = this._getModel(this.modelName);

        Model.findById(id, (err, record) => {
            // TODO: error handler
            record.remove(() => {
                res.sendStatus(200);
            });
        });
    }

    _getIdByReqest(reques) {
        return reques.params.id;
    }

    _getModel(modelName) {
        const modelPath = MODELS_PATH + '/' + modelName;
        return require.main.require(modelPath);
    }

}

//TODO: create correct object by class or create singleton by literal

module.exports = new BaseController();
