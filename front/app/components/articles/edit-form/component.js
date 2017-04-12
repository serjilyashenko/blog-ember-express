import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    save() {
      const model = this.get('model');

      this.sendAction('save', model);
    },

  },

});
