import ChangeSetController from 'front/addons/changeset-route/controller';

export default ChangeSetController.extend({

  actions: {

    save(...args) {
      const promise = this._super(...args);

      promise.then((changeset) => {
        this.transitionToRoute('user.articles.article', changeset.get('id'));
      });
      //todo: apply catch and handle validation errors and errors form server ???
    },

    cancel() {
      this.transitionToRoute('user.articles');
    },

  },

});
