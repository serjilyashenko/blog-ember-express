import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr('string'),
  owner: DS.attr('string'),
  article: DS.belongsTo('article', {async: true}),

});
