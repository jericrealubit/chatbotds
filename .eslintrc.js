module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the TypeScript parser
  extends: [
      'eslint:recommended', // Uses the recommended ESLint rules
      'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint
  ],
  plugins: ['@typescript-eslint'], // Enables the TypeScript plugin
  rules: {
      // Add or override rules here
      '@typescript-eslint/no-explicit-any': 'off', // Example: Disable no-explicit-any rule
      '@typescript-eslint/explicit-module-boundary-types': 'warn', // Warn if function/module types are not defined
  },
};
