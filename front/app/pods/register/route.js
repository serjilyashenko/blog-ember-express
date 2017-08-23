import ChangeSetRoute from 'front/addons/changeset-route/route';
import UserValidation from 'front/validations/user';

export default ChangeSetRoute.extend({

  validation: UserValidation,

  model() {
    return this.get('store').createRecord('user');
  },

  resetController(controller) {
    const model = controller.get('model');

    if (model.get('isNew')) {
      model.destroyRecord();
    }
  },

});
