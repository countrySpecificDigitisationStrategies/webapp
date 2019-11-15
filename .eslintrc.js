module.exports = {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ["prettier"],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
    ecmaFeatures:  {
      jsx:  true,
    },
  },
  env: {
    browser: true,
  },
  settings:  {
    react:  {
      version:  'detect',
    },
  },
  rules: {
    'react/self-closing-comp': 'warn'
  }
};