import Resolver from 'ember-resolver';
import Ember from 'ember';

export default Resolver.extend({

  customPodBasedComponentsInSubdir: function(parsedName) {
    const modulePrefix = this.namespace.modulePrefix;
    const podPrefix = modulePrefix + '/components';

    if (parsedName.type === 'component' || parsedName.fullNameWithoutType.match(/^components/)) {
      return this.podBasedLookupWithPrefix(podPrefix, parsedName);
    }
  },

  moduleNameLookupPatterns: Ember.computed(function () {
    return this._super()
      .unshiftObjects([this.customPodBasedComponentsInSubdir]);
  }).readOnly(),

});
