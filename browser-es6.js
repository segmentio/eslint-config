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
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react'
  ],
  rules: {
    'jsx-quotes': 2,
    'no-extra-parens': 0,
    'react/jsx-curly-spacing': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-closing-bracket-location': [2, 'after-props'],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-uses-react': [2, { pragma: 'element' }],
    'react/self-closing-comp': 2,
    'react/wrap-multilines': 2
  }
});
