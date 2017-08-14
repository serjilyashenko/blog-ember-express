import ChangeSetRoute from 'front/addons/changeset-route/route';
import ArticleValidation from 'front/validations/article';
import Authenticated from 'front/mixins/authenticated-route';

export default ChangeSetRoute.extend(Authenticated, {

  validation: ArticleValidation,

});
