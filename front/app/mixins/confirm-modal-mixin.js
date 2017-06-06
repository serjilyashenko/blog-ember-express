import Ember from 'ember';

// mixin for confirm-modal component
export default Ember.Mixin.create({

  isUserLeaving() {
    this.set('isConfirming', true);

    return new Promise(resolve => {
      this.set('allow', resolve);
    });
  },

  actions: {

    onLeaving(isLeaving) {
      this.allow(isLeaving);
    },

  },

});
