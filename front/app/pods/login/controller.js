import Ember from 'ember';

export default Ember.Controller.extend({

  session: Ember.inject.service(),

  transitionToPreviousRoute() {
    const previousTransition = this.get('previousTransition');

    if (previousTransition) {
      this.set('previousTransition', null);
      previousTransition.retry();
    } else {
      this.transitionToRoute('articles');
    }
  },

  clearObs: Ember.observer(
    'email',
    'password',
    function () {
      this.set('loginError', null);
    }
  ),

  actions: {

    login() {
      const {email, password} = this.getProperties('email', 'password');
      this.get('session')
        .login(email, password)
        .then(() => this.transitionToPreviousRoute())
        .catch(reason => this.set('loginError', reason));
    },

  },

});
