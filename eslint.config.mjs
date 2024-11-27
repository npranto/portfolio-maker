import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    // disable the 'react/react-in-jsx-scope' rule
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      // automatically detect the React version
      react: {
        version: 'detect',
      },
    },
  },
];
