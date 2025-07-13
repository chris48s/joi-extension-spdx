import globals from "globals";
import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import mochaPlugin from "eslint-plugin-mocha";

const config = [
  js.configs.recommended,
  mochaPlugin.configs.recommended,
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
      "mocha/no-pending-tests": ["error"],
      "mocha/no-exclusive-tests": ["error"],
    },
  },
];

export default config;
