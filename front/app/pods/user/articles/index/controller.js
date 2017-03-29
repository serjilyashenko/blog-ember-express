import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['order'],

  order: 'created:asc',

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
