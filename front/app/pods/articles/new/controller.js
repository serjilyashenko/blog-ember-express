import Ember from 'ember';
import ChangeSetController from 'front/addons/changeset-route/controller';
import ConfirmModalMixin from 'front/mixins/confirm-modal-mixin';

export default ChangeSetController.extend(ConfirmModalMixin, {

  session: Ember.inject.service(),

  actions: {

    save(changeset) {
      const currentUser = this.get('session.currentUser');
      changeset.set('author', currentUser);

      const promise = this._super(...arguments);

      promise.then((changeset) => {
        this.transitionToRoute('articles.article', changeset.get('id'));
      });
      //todo: apply catch and handle validation errors and errors form server ???
    },

    cancel() {
      this.transitionToRoute('articles');
    },

  },

});
