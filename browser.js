'use strict';

/**
 * Dependencies.
 */

var base = require('./');
var merge = require('lodash.merge');

/**
 * Browser setttings.
 */

module.exports = merge(base, {
  'env': {
    'browser': true
  }
});
