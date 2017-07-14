import Ember from 'ember';

const UserFabric = function (name, email) {
  return Ember.Object.create({name, email});
};

export default Ember.Route.extend({

  model() {
    return this.store.findAll('user');
  },

});
