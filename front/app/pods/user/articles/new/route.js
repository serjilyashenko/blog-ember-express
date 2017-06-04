import ChangeSetRoute from 'front/addons/changeset-route/route';
import ArticleValidation from 'front/validations/article';

export default ChangeSetRoute.extend({

  validation: ArticleValidation,

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
