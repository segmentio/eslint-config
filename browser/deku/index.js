'use strict';

module.exports = {
  "extends": "@segment/eslint-config/browser",

  "env": {
    "es6": true
  },

  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 6,
    "sourceType": "module"
  },

  "plugins": [
    "react"
  ],

  "rules": {
    "jsx-quotes": 2,
    "no-extra-parens": 0,
    "react/jsx-closing-bracket-location": [2, "after-props"],
    "react/jsx-curly-spacing": 2,
    "react/jsx-indent-props": [2, 2],
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-uses-react": [2, { pragma: "element" }],
    "react/jsx-uses-vars": 2,
    "react/self-closing-comp": 2,
    "react/wrap-multilines": 2
  }
};
