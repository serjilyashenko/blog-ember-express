import {
  validatePresence,
  validateLength,
} from 'ember-changeset-validations/validators';

export default {

  title: [
    validatePresence(true),
  ],

};
