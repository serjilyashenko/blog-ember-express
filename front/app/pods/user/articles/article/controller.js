import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    delete(article) {

      article.destroyRecord()
        .then(() => {
          console.log('ok');
          this.transitionToRoute('user.articles');
        })
        .catch((error) => {
          console.log(error);
        });
    },

  },

});
