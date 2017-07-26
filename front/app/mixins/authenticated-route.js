import Ember from 'ember';

const {inject: {service}} = Ember;

export default Ember.Mixin.create({

  session: service(),

  beforeModel(transition) {
    const currentUser = this.get('session.currentUser');

    if (currentUser) {
      return this._super(...arguments);
    }

    const loginController = this.controllerFor('users');
    loginController.set('previousTransition', transition);

    this.transitionTo('users');
  },

});
