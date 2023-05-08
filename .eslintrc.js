module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },
  extends: 'eslint:recommended',
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    curly: ['error', 'multi'],
    indent: ['warn', 2],
    'array-callback-return': ['off', { allowImplicit: true }],
    'no-return-assign': ['off'],
    'no-unused-expressions': ['off', { allowShortCircuit: true, allowTernary: true }],
    'no-sequences': ['off'],
    'no-undef': 'warn',
    'no-useless-escape': ['off'],
    'no-unused-vars': ['off'],
    'comma-dangle': ['warn', 'never'],
    semi: ['warn', 'never'],
    'quote-props': ['warn', 'as-needed'],
    quotes: ['warn', 'single'],
    'no-multiple-empty-lines': ['warn', { max: 1}]
  }
}
