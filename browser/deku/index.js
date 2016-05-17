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
    "jsx-quotes": "error",
    "no-extra-parens": "off",
    "react/jsx-closing-bracket-location": ["error", "after-props"],
    "react/jsx-curly-spacing": "error",
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-uses-react": ["error", { pragma: "element" }],
    "react/jsx-uses-vars": "error",
    "react/self-closing-comp": "error",
    "react/wrap-multilines": "error"
  }
};
