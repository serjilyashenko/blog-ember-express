import Ember from 'ember';

export default Ember.Route.extend({

  session: Ember.inject.service(),

  beforeModel() {
    const user = this.get('session.currentUser');

    if (user) {
      this.transitionTo('articles');
    }

    this._super(...arguments);
  },

});
