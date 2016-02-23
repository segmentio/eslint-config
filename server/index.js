'use strict';

module.exports = {
  "extends": "@segment/eslint-config",

  "env": {
    "node": true
  },

  rules: {
    "handle-callback-err": [1, "^(err|.+Err|error|.+Error)$"],
    "no-path-concat": 2,
    "no-sync": 2
  }
};
