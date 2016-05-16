'use strict';

/**
 * Extends browser configuration with ES3 settings.
 * Use when targeting old browsers, e.g. IE 8/7/6.
 */

module.exports = {
  "extends": "@segment/eslint-config/browser",

  "parserOptions": {
    "ecmaVersion": 3
  },

  "rules": {
    "comma-dangle": ["error", "never"],
    "dot-notation": ["error", { "allowKeywords": false }],
    "no-catch-shadow": "error",
    "quote-props": ["error", "as-needed", { "keywords": true }],
    "radix": ["error", "always"]
  }
};
