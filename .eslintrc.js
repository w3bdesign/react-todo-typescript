module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'jsx-a11y/href-no-hash': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.ts', '.tsx'] }],
    'no-console': [
      'error',
      {
        allow: ['warn'],
      },
    ],
    'multiline-ternary': 0,
    'no-unused-vars': 0,
    'no-shadow': 0,
    '@typescript-eslint/no-unused-vars': 'error',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'react/prop-types': 0,
    'linebreak-style': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-use-before-define': 0,
    'max-len': [
      'warn',
      {
        code: 80,
        tabWidth: 2,
        comments: 80,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
};
