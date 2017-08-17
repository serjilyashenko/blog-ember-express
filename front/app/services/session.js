import Ember from 'ember';
import Cookies from 'ember-cli-js-cookie';

const {inject: {service}} = Ember;

export default Ember.Service.extend({

  ajax: service(),
  store: service(),

  currentUser: null,

  login(email, password) {
    return this.get('ajax')
      .request('/sessions', {
        method: 'POST',
        data: {
          email,
          password,
        }
      })
      .then(({userId, authenticationToken}) => {
        if (!userId || !authenticationToken) {
          throw new Error();
        }

        Cookies.set('userId', userId);
        Cookies.set('authenticationToken', authenticationToken);
        this.initializeFromCookie();
        return;
      })
      .catch(() => {
        throw new Error('Wrong Ligin or Password');
      });
  },

  logout() {
    this.set('currentUser', null);
    Cookies.remove('userId');
    Cookies.remove('authenticationToken');
  },

  initializeFromCookie: Ember.on('init', function () {
    const userId = Cookies.get('userId');

    if (!userId) {
      return;
    }

    const user = this.get('store').find('user', userId);
    this.set('currentUser', user);
  }),

});
