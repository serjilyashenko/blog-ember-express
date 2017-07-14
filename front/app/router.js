import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('user', {path: '/Sashechka'}, function () {

    this.route('articles', function () {
      this.route('new');
      this.route('edit', {path: '/:article_id/edit'});
      this.route('article', {path: '/:article_id'});
    });

    this.route('bookmarks');

  });

  this.route('users');
});
export default Router;
