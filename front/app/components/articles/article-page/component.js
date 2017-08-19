import Ember from 'ember';

export default Ember.Component.extend({

  session: Ember.inject.service(),

  actions: {

    delete() {
      const model = this.get('model');

      if (!confirm(`Are you sure you want to delete ${model.get('title')} the article ?`)) {
        return;
      }

      this.sendAction('delete', model);
    },

  },

});
