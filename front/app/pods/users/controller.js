import Ember from 'ember';

export default Ember.Controller.extend({

  session: Ember.inject.service(),

  actions: {

    login(user) {
      this.get('session').login(user);

      const previousTransition = this.get('previousTransition');

      if (previousTransition) {
        this.set('previousTransition', null);
        previousTransition.retry();
      }
    },

  },

});
