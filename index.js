'use strict';

/**
 * Base configuration. This contains settings shared across all types of
 * JavaScript projects--ES6, frontend, Node, JSX, or any combination thereof.
 */

module.exports = {
  rules: {
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    // We deal with snake_case in a lot of integrations, so disable this. But generally, follow this rule.
    'camelcase': 0,
    'comma-style': [2, 'last'],
    'consistent-this': [0, 'self'],
    'curly': [2, 'multi-line'],
    'default-case': 2,
    'dot-location': [2, 'property'],
    'dot-notation': [2, { 'allowKeywords': true }],
    'generator-star-spacing': [2, 'after'],
    'guard-for-in': 2,
    'indent': [2, 2],
    'max-depth': [1, 6],
    'max-len': [1, 100, 2],
    'max-nested-callbacks': [1, 6],
    'max-params': [1, 5],
    'no-bitwise': 2,
    'no-else-return': 2,
    'no-extra-parens': 2,
    'no-floating-decimal': 2,
    'no-inline-comments': 1,
    'no-lonely-if': 2,
    'no-multiple-empty-lines': [2, {'max': 2}],
    'no-nested-ternary': 2,
    'no-new-require': 2,
    'no-self-compare': 2,
    'no-shadow': 0,
    'no-throw-literal': 2,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 2,
    'no-use-before-define': [2, 'nofunc'],
    'no-void': 2,
    'one-var': [2, 'never'],
    'operator-linebreak': [2, 'before'],
    'padded-blocks': [2, 'never'],
    'quote-props': [2, 'as-needed'],
    'quotes': [2, 'single'],
    'radix': 2,
    'space-after-keywords': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    // FIXME: ESLint doesn't support our function brace style (`function(){}`)
    // combined with our brace style (spaces, always) because it is, admittedly,
    // an inconsistent style. We can either change our style or write a custom
    // rule
    //'space-before-blocks': [],
    // FIXME: https://github.com/eslint/eslint/issues/2225
    // What we want is this:
    //   [1, 2, 3]
    //   { a: 1, b: 2 }
    //'space-in-brackets': [0, 'never'],
    'space-in-parens': [2, 'never'],
    'spaced-line-comment': [2, 'always'],
    'strict': [2, 'global'],
    // FIXME: https://github.com/eslint/eslint/issues/2108
    // In order to really get benefit from this rule we need to either fix the
    // above issue or stop adding a newline between our functions and their
    // corresponding JSDoc block
    'valid-jsdoc': [1, {
      'prefer': {
        'returns': 'return'
      },
      'requireReturn': false,
      'requireReturnDescription': false
    }],
    'wrap-iife': [2, 'outside'],
    'wrap-regex': 2,
    'yoda': [1, 'never']
  }
};
