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

    extend(child) {
        child.__proto__ = this;
        return child;
    }

    _getAll(req, res) {
        res.json({[this.modelName]: 'hello world'});
    }

    _get(req, res) {
        const id = req.params.id;
        res.json({[`${this.modelName} ${id}`]: 'hello world'})
    }

}

//TODO: create correct object by class or create singleton by literal

module.exports = new BaseController();
