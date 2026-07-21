import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
  // 1. eslint:recommended
  js.configs.recommended,

  // 2. plugin:react/recommended & plugin:react/jsx-runtime
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],

  // 3. plugin:react-hooks/recommended
  {
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
    },
  },

  // 커스텀 설정 (파일 지정 및 전역 변수, rules)
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    },
    rules: {
      "no-console": "warn"
    }
  }
]);
