const globals = require("globals");
const js = require("@eslint/js");
const prettierConfig = require("eslint-config-prettier");
const prettierPlugin = require("eslint-plugin-prettier");
const mochaPlugin = require("eslint-plugin-mocha");

module.exports = [
  js.configs.recommended,
  mochaPlugin.configs.flat.recommended,
  prettierConfig,
  {
    plugins: {
      mocha: mochaPlugin,
      prettier: prettierPlugin,
    },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        mocha: true,
        ...globals.node,
      },
    },
    rules: {
      "prettier/prettier": ["error"],
      "mocha/no-skipped-tests": ["error"],
      "mocha/no-exclusive-tests": ["error"],
    },
  },
];
