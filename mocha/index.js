'use strict';

module.exports = {
  "env": {
    "mocha": true
  },

  "rules": {
    // Deeply nested functions are a reality of Mocha+BDD, so permit them
    "max-nested-callbacks": 0
  }
};
