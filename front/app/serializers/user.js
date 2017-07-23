import Ember from 'ember';
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({

  store: Ember.inject.service(),

  normalizeFindAllResponse(/* store, primaryModelClass */) {
    const jsonApiPayload = this._super(...arguments);

    jsonApiPayload.data = jsonApiPayload.data.map(this.addLinks.bind(this));

    return jsonApiPayload;
  },

  normalizeFindRecordResponse(/* store, type, payload */) {
    const jsonApiPayload = this._super(...arguments);

    jsonApiPayload.data = this.addLinks(jsonApiPayload.data);
    return jsonApiPayload;
  },

  addLinks(user) {
    const store = this.get('store');
    const userUrl = store.adapterFor('user').buildURL('user', user.id);

    const relationships = {
      bookmarks: {
        links: {
          related: `${userUrl}/bookmarks`
        }
      }
    };

    return {...user, relationships};
  }

});
