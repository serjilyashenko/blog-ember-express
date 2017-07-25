import Ember from 'ember';

export default Ember.Service.extend({

  store: Ember.inject.service(),
  session: Ember.inject.service(),

  list: Ember.computed(
    'session.currentUser.bookmarks',
    function () {
      return this.get('session.currentUser.bookmarks') || [];
    }
  ),

  length: Ember.computed(
    'list.[]',
    function () {
      return this.get('list.length');
    }
  ),

  addArticle(article, title) {
    const name = title || article.get('title');
    const newBookmark = this.get('store').createRecord('bookmark', {
      name,
      article,
    });

    return newBookmark.save();
  },

  removeBookmark(bookmark) {
    return bookmark.destroyRecord();
  },

});
