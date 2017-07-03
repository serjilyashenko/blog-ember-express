import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({

  author: DS.attr('string'),
  created: DS.attr('date'),
  title: DS.attr('string'),
  short: DS.attr('string'),
  post: DS.attr('string'),

  bookmarks: Ember.inject.service(),

  isInBookmarks: Ember.computed(
    'bookmarks.list.[]',
    function () {
      return this.get('bookmarks.list').mapBy('article.id').includes(this.get('id'));
    }
  ),

});
