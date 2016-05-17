'use strict';

module.exports = {
  "extends": "@segment/eslint-config",

  "env": {
    "browser": true,
    "commonjs": true
  },

  "rules": {
    "new-cap": ["error", { capIsNewExceptions: [ "Emitter", "Enumerable", "Validator" ] }],
    // We frequently use console.log in development, and most of our libraries
    // will depend on linting success to run tests
    "no-console": "warn"
  }
};
