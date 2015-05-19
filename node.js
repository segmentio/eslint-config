'use strict';

/**
 * Dependencies.
 */

var base = require('./index');
var merge = require('lodash.merge');

/**
 * Node setttings.
 */

module.exports = merge(base, {
  'env': {
    'node': true
  },

  'rules': {
    'handle-callback-err': [1, '^(err|.+Err|error|.+Error)$'],
    'no-path-concat': 2,
    'no-sync': 1
  }
});
