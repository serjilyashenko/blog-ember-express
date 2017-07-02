import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({

  author: DS.attr('string'),
  created: DS.attr('date'),
  title: DS.attr('string'),
  short: DS.attr('string'),
  post: DS.attr('string'),

  readingList: Ember.inject.service(),

  isInBookmarks: Ember.computed(
    'readingList.list.[]',
    function () {
      return this.get('readingList.list').includes(this.get('id'));
    }
  ),

});
