import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  title: DS.attr('string'),
  post: DS.attr('string'),
});
