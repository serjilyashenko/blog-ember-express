import Ember from 'ember';
import Cookies from 'ember-cli-js-cookie';

const {inject: {service}} = Ember;

export default Ember.Service.extend({

  ajax: service(),
  store: service(),

  currentUser: null,

  // todo: fix that method. Very Important
  login(userName, password) {
    return this.get('store')
      .findAll('user')
      .then(users => users.findBy('name', userName))
      .then(user => {
        if (password !== 'secret' || !user) {
          throw new Error('Wrong Ligin or Password');
        }

        return user;
      })
      .then(user => {
        this.set('currentUser', user);
        Cookies.set('userId', user.get('id'));
      });
  },

  logout() {
    this.set('currentUser', null);
    Cookies.remove('userId');
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
