'use strict';

/**
 * Dependencies.
 */

var base = require('./browser');
var merge = require('lodash.merge');

/**
 * Browser setttings.
 */

module.exports = merge(base, {
  env: {
    es6: true
  },
  ecmaFeatures: {
    modules: true,
    jsx: true
  },
  plugins: [
    'react'
  ]
});
