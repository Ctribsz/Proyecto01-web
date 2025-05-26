import js from "@eslint/js"
import globals from "globals"
import pluginReact from "eslint-plugin-react"
import { defineConfig } from "eslint/config"

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
  },
  pluginReact.configs.flat.recommended,
  // Añadimos las reglas custom, incluyendo 'semi'
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    rules: {
      // Prohíbe punto y coma al final de cada sentencia
      "semi": ["error", "never"],
    },
  },
])