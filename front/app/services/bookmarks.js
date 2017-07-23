import Ember from 'ember';

export default Ember.Service.extend({

  store: Ember.inject.service(),
  session: Ember.inject.service(),

  user: Ember.computed.oneWay('session.currentUser'),

  init() {
    this._super(...arguments);

    this.set('list', [])
  },

  listObs: Ember.on('init',
    Ember.observer(
      'user',
      'user.bookmarks.[]',
      'reloadBookmarks',
      function () {
        if (!this.get('user')) {
          return this.get('list').clear();
        }

        this.get('user.bookmarks').then(it => {
          this.get('list').clear();
          this.get('list').addObjects(it)
        });
      }
    )
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
