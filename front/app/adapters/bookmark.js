import Ember from 'ember';
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  session: Ember.inject.service(),

  shouldReloadAll() {
    return true;
  },

  namespace: Ember.computed(
    'session.currentUser',
    function () {
      const applicationNamespace = 'api';
      const userId = this.get('session.currentUser.id');

      return `${applicationNamespace}/users/${userId}`;
    }
  ),

});
