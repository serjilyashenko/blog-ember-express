import ChangeSetRoute from 'front/addons/changeset-route/route';
import ArticleValidation from 'front/validations/article';

export default ChangeSetRoute.extend({

  validation: ArticleValidation,

});
