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
  ecmaFeatures: {
    arrowFunctions: true,
    blockBindings: true,
    classes: true,
    defaultParams: true,
    destructuring: true,
    generators: true,
    jsx: true,
    modules: true,
    objectLiteralComputedProperties: true,
    objectLiteralShorthandMethods: true,
    objectLiteralShorthandProperties: true,
    regexUFlag: true,
    regexYFlag: true,
    restParams: true,
    spread: true,
    templateStrings: true
  },
  plugins: [
    'react'
  ]
});
