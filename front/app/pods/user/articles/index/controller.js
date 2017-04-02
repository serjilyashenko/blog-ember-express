import Ember from 'ember';
import {DEFAULT_QUERY_PARAMS} from 'front/const/defaults';

export default Ember.Controller.extend({

  order: DEFAULT_QUERY_PARAMS.ORDER,
  page: DEFAULT_QUERY_PARAMS.PAGE,
  limit: DEFAULT_QUERY_PARAMS.LIMIT,

  actions: {

    changeOrder() {
      if (this.get('order') === 'created:asc') {
        this.set('order', 'created:desc');
      } else {
        this.set('order', 'created:asc');
      }
    }

  },

});
