import Ember from 'ember';
import Authenticated from 'front/mixins/authenticated-route';

const {inject: {service}} = Ember;

export default Ember.Route.extend(Authenticated, {

  bookmarks: service(),

  model() {
    return this.get('bookmarks.list');
  },

});
