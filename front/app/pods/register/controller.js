import ChangeSetRoute from 'front/addons/changeset-route/controller';
import ConfirmModalMixin from 'front/mixins/confirm-modal-mixin';

export default ChangeSetRoute.extend(ConfirmModalMixin, {

  actions: {

    save(changeset) {
      const promise = this._super(...arguments);

      promise.then(() => {
        this.transitionToRoute('login'); //todo: auto login and transition to articles
      });
      //todo: apply catch and handle validation errors and errors form server ???
    },

  },

});
