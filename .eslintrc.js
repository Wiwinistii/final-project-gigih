module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // extends: [
  //   'plugin:react/recommended',
  //   'airbnb',
  // ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".tsx", ".ts"] }],
    "linebreak-style": 0,
    quotes: [2, "double", { avoidEscape: true }],
    "no-use-before-define": ["error", { functions: false, classes: false, variables: false }],
    "react/prop-types": 0,
    "default-param-last": 0,
  },
};
