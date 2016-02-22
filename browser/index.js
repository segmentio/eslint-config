'use strict';

module.exports = {
  "extends": "@segment/eslint-config",

  "env": {
    "browser": true
  },

  "globals": {
    "exports": true,
    "module": true,
    "require": false
  },

  "rules": {
    "new-cap": [2, { capIsNewExceptions: [ "Emitter", "Enumerable", "Validator" ] }],
    // We frequently use console.log in development, and most of our libraries
    // will depend on linting success to run tests
    "no-console": 1
  }
};
