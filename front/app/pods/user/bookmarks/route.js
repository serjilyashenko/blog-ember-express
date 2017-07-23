import Ember from 'ember';

const {inject: {service}} = Ember;

export default Ember.Route.extend({

  bookmarks: service(),

  model() {
    return this.get('bookmarks.list');
  },

});
