import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
  {
    ignores: [
      '.next/**',
      'out/**',
      'node_modules/**',
      '*.config.js',
      'postcss.config.js',
      'prettier.config.js',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      // Keep lint as a regression check, not a refactor enforcer.
      'prefer-const': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
]
