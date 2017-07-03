import DS from 'ember-data';

export default DS.Model.extend({

  owner: DS.attr('string'),
  name: DS.attr('string'),
  article: DS.belongsTo('article', {async: true}),

});
