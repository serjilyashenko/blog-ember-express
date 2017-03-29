import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    order: {
      refreshModel: true,
    }
  },

  beforeModel(transition) {
    this._super(...arguments);
    console.log('>> beforeModel ', transition);
  },

  model(params) {
    console.log('>> model ', params);

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

  actions: {

    willTransition() {
      console.log('willTransition');
    },

    didTransition() {
      console.log('didTransition');
      const model = this.controller.get('model');
      console.log('? ', model.get('meta.order'));
      this.controller.set('order', model.get('meta.order'));
    },

    loading(transition) {
      console.log('loading');
      transition.finally(function() {
        console.log('LOADED');
      });
    },

  },

});
