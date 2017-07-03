import Ember from 'ember';

export default Ember.Component.extend({

  tagName: '',

  bookmarks: Ember.inject.service(),

  actions: {

    addToBookmarks(article) {
      this.get('bookmarks').addArticle(article);
    },

  },

});
