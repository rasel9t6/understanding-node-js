import pkg from "@eslint/js";
import prettier from "eslint-plugin-prettier";
const { eslintRecommended } = pkg;
export default [
  {
    files: ["**/*.js", "**/*.ts"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        // Define global variables
        NodeJS: true,
      },
    },
    rules: {
      ...eslintRecommended,
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          singleQuote: true,
        },
      ],
    },
    plugins: {
      prettier,
    },
  },
];
