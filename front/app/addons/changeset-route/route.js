import Ember from 'ember';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';

export default Ember.Route.extend({

  validation: null,

  setupController(controller, model) {
    this._super(controller, model);

    const changeSet = this.createChangeSet(model);
    controller.set('changeSet', changeSet);
  },

  createChangeSet(model) {
    const validation = this.get('validation');

    if (!validation) {
      return new Changeset(model);
    }

    return new Changeset(
      model,
      lookupValidator(validation),
      validation,
      {skipValidate: true}
    );
  },

  isDirtyChangeSet(changeSet) {
    return Ember.get(changeSet, 'isDirty');
  },

  actions: {

    didTransition() {
      this.set('isAllowedTransition', false);
      this._super(...arguments);
    },

    willTransition(transition) {
      const changeSet = this.get('controller.changeSet');
      const isDirty = this.isDirtyChangeSet(changeSet);

      if (!isDirty) {
        return this._super(transition);
      }

      if (this.get('isAllowedTransition')) {
        return this._super(transition);
      }

      transition.abort();

      this.controller.isUserLeaving().then(isLeaving => {
        if (isLeaving) {
          this.set('isAllowedTransition', true);
          transition.retry();
        }
      });
    },

  },

});
