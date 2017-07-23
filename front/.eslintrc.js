module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  extends: 'eslint:recommended',
  env: {
    browser: true,
    es6: true,
  },
  rules: {
  }
};
