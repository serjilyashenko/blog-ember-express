import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.query('article', {
      limit: 5,
      offset: 0,
      order: 'created:desc',
    });
  },

});
