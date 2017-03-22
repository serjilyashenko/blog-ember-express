import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.query('article', {
      limit: 5,
      page: 4,
      order: 'created:asc',
    });
  },

});
