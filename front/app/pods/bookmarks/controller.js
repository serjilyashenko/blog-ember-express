import Ember from 'ember';

export default Ember.Controller.extend({

  bookmarks: Ember.inject.service(),

  actions: {

    removeBookmark(bookmark) {
      this.get('bookmarks').removeBookmark(bookmark);
    },

  },

});
