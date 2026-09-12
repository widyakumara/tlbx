import jslint from "@eslint/js";
import astro from "eslint-plugin-astro";
import globals from "globals";
import tslint from "typescript-eslint";

export default [
  jslint.configs.recommended,
  ...tslint.configs.recommended,
  ...astro.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    ignores: [".astro/*", ".dist/*", "**/*.d.ts"],
  },
  {
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },
];
