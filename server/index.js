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
    "handle-callback-err": ["warn", "^(err|.+Err|error|.+Error)$"],
    "no-path-concat": "error",
    "no-sync": "error",
    "require-path-exists/exists": "error",
    "require-path-exists/notEmpty": "error",
    "require-path-exists/tooManyArguments": "error"
  }
};
