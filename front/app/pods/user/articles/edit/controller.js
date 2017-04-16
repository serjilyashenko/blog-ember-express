import ManagementController from 'front/addons/management-route/controller';

export default ManagementController.extend({

  actions: {

    save(...args) {
      const promise = this._super(...args);

      promise.then((changeset) => {
        this.transitionToRoute('user.articles.article', changeset.get('id'));
      });
      //todo: apply catch and handle validation errors and errors form server ???
    },

    cancel() {
      this.transitionToRoute('user.articles.article', this.get('model.id'));
    },

  },

});
