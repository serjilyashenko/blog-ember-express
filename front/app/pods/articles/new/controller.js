import ChangeSetController from 'front/addons/changeset-route/controller';
import ConfirmModalMixin from 'front/mixins/confirm-modal-mixin';

export default ChangeSetController.extend(ConfirmModalMixin, {

  actions: {

    save(...args) {
      const promise = this._super(...args);

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
