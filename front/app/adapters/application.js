import Ember from 'ember';
import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend({

  host: ENV.APP.HOST || null,
  namespace: 'api',

  pathForType(type) {
    const superType = this._super(type);

    return Ember.String.dasherize(superType);
  },

});
