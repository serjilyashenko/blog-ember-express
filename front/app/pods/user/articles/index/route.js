import Ember from 'ember';
import {DEFAULT_QUERY_PARAMS} from 'front/const/defaults';
import PaginationRouteMixin from 'ember-pagination-addon/mixins/pagination-route-mixin';

export default Ember.Route.extend(PaginationRouteMixin, {

  queryParams: {
    order: {
      refreshModel: true,
    },
  },

  model(params, transition) {
    const allQueryParams = transition.queryParams;
    const dirtyParamsKeys = this._propertyDifference(allQueryParams, params);

    if (dirtyParamsKeys.length > 0) {
      dirtyParamsKeys.forEach((key) => {
        delete allQueryParams[key];
      });
      this.refresh();   // refresh route for clearing of dirty query params
    }

    return this.store.query('article', params);
  },

  afterModel(model, transition) {
    this._super(...arguments);

    transition.promise.then((route) => {
      const meta = model.get('meta');
      const metaNormalized = this._normalizeMeta(meta);

      route.controller.setProperties(metaNormalized);
    });

  },

  _propertyDifference(minuend, subtrahend) {
    const minutedKeys = Object.keys(minuend);
    const subtrahendKeys = Object.keys(subtrahend);

    return minutedKeys
      .map((key) => {
        if (subtrahendKeys.includes(key)) {
          return null;
        }

        return key;
      })
      .without(null);
  },

  _normalizeMeta({
                   order = DEFAULT_QUERY_PARAMS.ORDER,
                   limit = DEFAULT_QUERY_PARAMS.LIMIT,
                   page = {},
                 } = {}) {
    const currentPage = page.current || DEFAULT_QUERY_PARAMS.PAGE;

    return {order, limit, page: currentPage};
  },

  actions: {

    willTransition() {
      console.log('willTransition');
    },

    didTransition() {
      console.log('didTransition');
    },

    loading(transition) {
      this._super(...arguments);
      console.log('loading');
      transition.finally(function () {
        console.log('LOADED');
      });
    },

  },
});
