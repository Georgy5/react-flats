module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "no-console": "off",
    "comma-dangle": "off",
    "quotes": "off",
    "react/prop-types": 0,
    "arrow-body-style": 0,
    "space-before-function-paren": 0,
    "array-bracket-spacing": "off"
  },
  parser: "@babel/eslint-parser"
};
