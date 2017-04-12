import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  created: DS.attr('date'),
  title: DS.attr('string'),
  short: DS.attr('string'),
  post: DS.attr('string'),
});
