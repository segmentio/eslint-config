'use strict';

/**
 * Dependencies.
 */

var base = require('./');
var merge = require('lodash.merge');

/**
 * Browser setttings.
 */

module.exports = merge({}, base, {
  env: {
    browser: true
  },
  rules: {
    'new-cap': [ 2, { capIsNewExceptions: [ 'Emitter' ] } ],
    // We frequently use console.log in development, and most of our libraries
    // will depend on linting success to run tests
    'no-console': 1
  }
});
