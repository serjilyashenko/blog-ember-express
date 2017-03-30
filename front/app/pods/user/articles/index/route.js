import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    order: {
      refreshModel: true,
    },
    page: {
      refreshModel: true,
    },
    limit: {
      refreshModel: true,
    },
  },

  beforeModel(transition) {
    this._super(...arguments);
    console.log('>> beforeModel ', transition);
  },

  model(params) {
    console.log('>> model ', params);
    console.log('>> model ', Object.keys(this.get('queryParams')));
    console.log('>> model ', Object.keys(params));

    return this.store.query('article', params);
  },

  afterModel(model) {
    this._super(...arguments);
    console.log('>> afterModel ', model);
    console.log(this.controller);
  },

  resetController() {
    console.log('>> resetController');
  },

  setupController(controller, model) {
    this._super(...arguments);
    console.log('>> setupController ');
    console.log('>> ', controller);
    console.log('>> ', model);
  },

  _normalizeMeta(meta) {
    return {
      order: meta.order,
      page: meta.page.current,
      limit: meta.limit,
    };
  },

  actions: {

    willTransition() {
      console.log('willTransition');
    },

    didTransition() {
      console.log('didTransition');
      const meta = this.controller.get('model.meta');
      const metaNormalized = this._normalizeMeta(meta);
      this.controller.setProperties(metaNormalized);
    },

    loading(transition) {
      console.log('loading');
      transition.finally(function () {
        console.log('LOADED');
      });
    },

    queryParamsDidChange(params1, params2) {
      const correctParams = Object.keys(this.get('queryParams'));

      // todo: check params1 and params2 on correct
    },

  },

});
