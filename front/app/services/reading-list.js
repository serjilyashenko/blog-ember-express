import Ember from 'ember';

export default Ember.Service.extend({

  list: [],

  length: Ember.computed(
    'list.[]',
    function () {
      return this.get('list.length');
    }
  ),

  add(id) {
    this.get('list').addObject(id);
  },

  remove(id) {

  },

});
