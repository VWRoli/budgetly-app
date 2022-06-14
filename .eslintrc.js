module.exports = {
  root: true,
  extends: '',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['off'],
        'no-shadow': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': ['warn'],
      },
    },
  ],
  globals: {
    React: true,
    JSX: true,
  },
};
