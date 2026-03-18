import globals from "globals";
import js from "@eslint/js";
import nodeCoreTestPlugin from "eslint-plugin-node-core-test";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

const config = [
  js.configs.recommended,
  prettierConfig,
  nodeCoreTestPlugin.configs.recommended,
  {
    plugins: {
      prettier: prettierPlugin,
      "node-core-test": nodeCoreTestPlugin,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        mocha: true,
        ...globals.node,
      },
    },
    rules: {
      "prettier/prettier": ["error"],
      "node-core-test/no-exclusive-tests": ["error"],
      "node-core-test/no-incomplete-tests": ["error"],
      "node-core-test/no-skipped-tests": ["error"],
    },
  },
];

export default config;
