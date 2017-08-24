import Ember from 'ember';
import ChangeSetRoute from 'front/addons/changeset-route/controller';
import ConfirmModalMixin from 'front/mixins/confirm-modal-mixin';

export default ChangeSetRoute.extend(ConfirmModalMixin, {

  session: Ember.inject.service(),

  validate(changeSet) {
    return changeSet.validate().then(() => {
      const isPasswordsMatch = changeSet.get('password') === this.get('passwordConfirmation');
      const isChangeSetValid = changeSet.get('isValid');

      if (!isPasswordsMatch) {
        this.set('passwordConfirmationError', 'Passwords do not match');
      }

      if (!isPasswordsMatch || !isChangeSetValid) {
        throw new Error('>> validation error ! HANDLE ERRORS');
      }

      return changeSet;
    });
  },

  passwordConfirmationObs: Ember.observer(
    'passwordConfirmation',
    function () {
      this.set('passwordConfirmationError', '');
    }
  ),

  actions: {

    save(changeSet) {
      this.validate(changeSet).then(user => {
        const loginController = Ember.getOwner(this).lookup('controller:login');
        const session = this.get('session');
        const email = user.get('email');
        const password = this.get('passwordConfirmation');

        session.login(email, password).then(() => {
          changeSet.rollback();
          loginController.transitionToPreviousRoute();
        });
      });
      //todo: apply catch and handle validation errors and errors form server ???
    },

  },

});
