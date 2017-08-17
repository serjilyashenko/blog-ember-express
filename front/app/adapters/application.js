import Ember from 'ember';
import DS from 'ember-data';
import ENV from '../config/environment';
import Cookies from 'ember-cli-js-cookie';

export default DS.RESTAdapter.extend({

  host: ENV.APP.HOST || null,
  namespace: 'api',

  headers: Ember.computed({
    get() {
      const token = Cookies.get('authenticationToken');
      const headers = token ? {'X-CSRF-Token': token} : {};

      return headers;
    }
  }).volatile(),

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
