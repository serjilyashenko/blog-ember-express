import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({

  applicationAdapter: Ember.computed({
    get() {
      const appInstance = Ember.getOwner(this);
      return appInstance.lookup('adapter:application');
    }
  }),

  host: Ember.computed.oneWay('applicationAdapter.host'),
  namespace: Ember.computed.oneWay('applicationAdapter.namespace'),

});
