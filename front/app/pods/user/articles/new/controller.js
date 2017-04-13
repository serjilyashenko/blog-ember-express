import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    save(changeset) {
      changeset.save()
        .then((changeset) => {
        console.log(changeset);
          this.transitionToRoute('user.articles.article', changeset.get('id'));
        })
        .catch((error) => {
          throw new Error(`Error From Backend: ${error}`);
        });
    },

  },

});
