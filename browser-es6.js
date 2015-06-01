'use strict';

/**
 * Dependencies.
 */

var base = require('./browser');
var merge = require('lodash.merge');

/**
 * Browser setttings.
 */

module.exports = merge({}, base, {
  env: {
    es6: true
  },
  ecmaFeatures: {
    modules: true,
    jsx: true
  },
  plugins: [
    'react'
  ],
  rules: {
    'new-cap': 0,
    'no-extra-parens': 0,
    'no-inline-comments': 0,
    'react/jsx-uses-react': [ 2, { pragma: 'dom' } ],
    'space-before-function-paren': [ 2, { anonymous: 'always', named: 'never' } ]
  }
});
