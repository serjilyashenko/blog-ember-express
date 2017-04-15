import {
  validatePresence,
  validateLength,
} from 'ember-changeset-validations/validators';

export default {

  title: [
    validatePresence(true),
    validateLength({min: 3, max: 100}),
  ],

  short: [
    validateLength({max: 500}),
  ],

};
