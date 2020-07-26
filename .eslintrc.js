module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    "sourceType": "module"
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:vue/recommended",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "prettier/vue"
  ],
  // add your custom rules here
  rules: {
  }
}
