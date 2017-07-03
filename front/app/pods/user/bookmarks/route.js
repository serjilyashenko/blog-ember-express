import Ember from 'ember';

export default Ember.Route.extend({

  bookmarks: Ember.inject.service(),

  model() {
    return this.get('bookmarks.list');
  },

});
