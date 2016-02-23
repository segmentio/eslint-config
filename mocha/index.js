'use strict';

module.exports = {
  "env": {
    "mocha": true
  },

  "plugins": [
    "mocha"
  ],

  "rules": {
    // Deeply nested functions are a reality of Mocha+BDD, so permit them
    "max-nested-callbacks": 0,
    "mocha/handle-done-callback": 2,
    "mocha/no-exclusive-tests": 2,
    "mocha/no-global-tests": 2,
    "require-jsdoc": 0
  }
};
