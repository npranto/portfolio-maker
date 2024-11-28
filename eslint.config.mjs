import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    // config only applies to JavaScript, JSX, and other supported file extensions
    files: ['**/*.{js,mjs,cjs,jsx}'],
  },

  // define the global variables for browser and node environments
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },

  // apply recommended configurations for JavaScript and React
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
    rules: {
      // disable the 'react/react-in-jsx-scope' rule, as React 17+ doesn't require it
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      // automatically detect the React version from package.json
      react: {
        version: 'detect',
      },
    },
  },
];
