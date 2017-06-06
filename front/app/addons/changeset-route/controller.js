import Ember from 'ember';

export default Ember.Controller.extend({

  isUserLeaving() {
    return new Promise(resolve => {
      resolve(confirm('You have unsaved changes. Are you sure you want to leave this page?'));
    });
  },

  actions: {

    save(changeSet) {
      return changeSet.validate()
        .then(() => {
          if (changeSet.get('isValid')) {
            return changeSet.save();
          }

          throw new Error('>> validation error ! HANDLE ERRORS');
        });
      //todo: apply catch and handle validation errors and errors form server
    },

  },

});
