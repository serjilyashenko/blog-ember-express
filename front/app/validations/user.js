import {
  validatePresence,
  validateLength,
  validateFormat,
} from 'ember-changeset-validations/validators';

export default {

  email: [
    validateFormat({ type: 'email' }),
  ],

  name: [
    validatePresence(true),
    validateLength({min: 3, max: 100}),
  ],

  password: [
    validatePresence(true),
    validateLength({min: 5}),
  ],

};
