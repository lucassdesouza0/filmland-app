module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'standard'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'eslint-plugin-import-helpers', 'react-hooks'],
  rules: {
    'react/jsx-filename-extension': [0],
    'import-helpers/order-imports': [
      'warn',
      {
        // example configuration
        newlinesBetween: 'always',
        groups: ['/^react/', '/module/', ['parent', 'sibling', 'index']],
        alphabetize: {order: 'asc', ignoreCase: true},
      },
    ],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
};
