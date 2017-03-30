import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['order', 'page', 'limit'],

  order: 'created:asc',
  page: 1,
  limit: 2,

  actions: {

    changeOrder() {
      console.log(this.get('order'));

      if (this.get('order') === 'created:asc') {
        this.set('order', 'created:desc');
      } else {
        this.set('order', 'created:asc');
      }
    }

  },

});
