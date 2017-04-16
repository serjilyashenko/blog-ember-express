import Ember from 'ember';
import Changeset from 'ember-changeset';
import ArticleValidation from 'front/validations/article';
import lookupValidator from 'ember-changeset-validations';

export default Ember.Route.extend({

  setupController(controller, model) {
    this._super(controller, model);

    const changeset = new Changeset(
      model,
      lookupValidator(ArticleValidation),
      ArticleValidation,
      { skipValidate: true }
    );
    controller.set('changeset', changeset);
  },

  actions: {

    willTransition(transition) {
      const idDirtyChangeset = this.get('controller.changeset.isDirty');

      if (!idDirtyChangeset) {
        return;
      }

      // refactor to normal popup
      if (confirm('You have unsaved changes.  Are you sure you want to leave this page?')) {
        return;
      }

      transition.abort();
    },

  },

});
