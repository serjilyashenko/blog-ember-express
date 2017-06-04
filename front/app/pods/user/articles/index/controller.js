import Ember from 'ember';
import {DEFAULT_QUERY_PARAMS} from 'front/const/defaults';
import PaginationControllerMixin from 'ember-pagination-addon/mixins/pagination-controller-mixin';

export default Ember.Controller.extend(PaginationControllerMixin, {

  limit: DEFAULT_QUERY_PARAMS.LIMIT,

  order: DEFAULT_QUERY_PARAMS.ORDER,

  actions: {

    changeOrder() {
      if (this.get('order') === 'created:asc') {
        this.set('order', 'created:desc');
      } else {
        this.set('order', 'created:asc');
      }
    },

    setOrder(order) {
      this.set('order', order);
    },

  },

});
