'use strict';

module.exports = {
  "extends": "@segment/eslint-config",

  "env": {
    "es6": true,
    "node": true
  },

  "parserOptions": {
    "ecmaVersion": 6
  },

  "plugins": [
    "require-path-exists"
  ],

  "rules": {
    "handle-callback-err": [1, "^(err|.+Err|error|.+Error)$"],
    "no-path-concat": 2,
    "no-sync": 2,
    "require-path-exists/exists": 2,
    "require-path-exists/notEmpty": 2,
    "require-path-exists/tooManyArguments": 2
  }
};
