import Resolver from 'ember-resolver';
import Ember from 'ember';

export default Resolver.extend({

  customPodBasedModuleName(parsedName) {
    let podPrefix = `${this.namespace.modulePrefix}/pods`;

    return this.podBasedLookupWithPrefix(podPrefix, parsedName);
  },

  moduleNameLookupPatterns: Ember.computed(function () {
    return this._super()
      .unshiftObjects([this.customPodBasedModuleName]);
  }).readOnly(),

});
