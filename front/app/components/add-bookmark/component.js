import Ember from 'ember';

export default Ember.Component.extend({

  tagName: '',

  readingList: Ember.inject.service(),

  actions: {

    addToBookmarks(id) {
      this.get('readingList').add(id);
    },

  },

});
