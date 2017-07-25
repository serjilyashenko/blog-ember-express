import Ember from 'ember';
import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend({

  host: ENV.APP.HOST || null,
  namespace: 'api',

  ajax(url, method, hash) {

    if (ENV.environment === 'development') {
      if (!hash) {
        hash = {};
      }

      hash.xhrFields = {withCredentials: true};
    }

    return this._super(url, method, hash);
  },

  pathForType(type) {
    const superType = this._super(type);

    return Ember.String.dasherize(superType);
  },

});
