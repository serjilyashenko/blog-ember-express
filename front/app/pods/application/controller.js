import Ember from 'ember';

export default Ember.Controller.extend({

  bookmarks: Ember.inject.service(),
  session: Ember.inject.service(),

  user: Ember.computed(
    'session.currentUser',
    function () {
      return this.get('session.currentUser');
    }
  ),

  actions: {

    logout() {
      this.get('session').logout();
      this.transitionToRoute('users');
    }

  },

});
