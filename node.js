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
  }
});
