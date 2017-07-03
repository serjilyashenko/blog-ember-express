import Ember from 'ember';

export default Ember.Service.extend({

  store: Ember.inject.service(),

  list: Ember.computed(
    'reloadBookmarks',
    function () {
      return this.get('store').findAll('bookmark');
    }
  ),

  refresh() {
    this.notifyPropertyChange('reloadBookmarks');
  },

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

    newBookmark.save().then(() => this.refresh());
  },

  removeBookmark(bookmark) {
    bookmark.destroyRecord().then(() => this.refresh());
  },

});
