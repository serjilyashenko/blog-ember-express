import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    save(changeset) {
      changeset.validate()
        .then(() => {
          if (changeset.get('isValid')) {
            return changeset.save();
          }

          throw new Error('>> validation error ! HANDLE ERRORS');
        })
        .then((changeset) => {
          this.transitionToRoute('user.articles.article', changeset.get('id'));
        });
      //todo: apply catch and handle validation errors and errors form server
    },

  },

});
