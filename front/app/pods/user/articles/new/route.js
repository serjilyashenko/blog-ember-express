import ManagementRouter from 'front/addons/management-route/route';

export default ManagementRouter.extend({

  model() {
    return this.get('store').createRecord('article');
  },

  resetController(controller) {
    const model = controller.get('model');

    if (model.get('isNew')) {
      model.destroyRecord();
    }
  },

});
