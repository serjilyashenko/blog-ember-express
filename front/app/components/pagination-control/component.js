import Ember from 'ember';

export default Ember.Component.extend({

  maxPage: Ember.computed(
    'pagesCount',
    function () {
      return this.get('pagesCount') || 1;
    }
  ),

  pageNumbers: Ember.computed(
    'maxPage',
    function () {
      const maxPage = this.get('maxPage');

      return [...Array(maxPage)].map((item, index) => index + 1);
    }
  ),

  actions: {

    setPage(index) {
      this.sendAction('setPage', index);
    },

    incrementPage() {
      const incrementedPage = this.incrementProperty('currentPage');
      const maxPage = this.get('maxPage');

      const newPage = Math.min(incrementedPage, maxPage);

      this.sendAction('setPage', newPage);
    },

    decrementPage() {
      const decrementedPage = this.decrementProperty('currentPage');

      const newPage = Math.max(decrementedPage, 1);

      this.sendAction('setPage', newPage);
    },

  },

});
