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
    "max-nested-callbacks": "off",
    "mocha/handle-done-callback": "error",
    "mocha/no-exclusive-tests": "error",
    "mocha/no-global-tests": "error",
    "require-jsdoc": "off"
  }
};
