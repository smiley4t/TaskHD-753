import eslintRecommended from 'eslint/conf/eslint-recommended.js'; // Import the recommended config
module.exports = {
  files: ['**/*.js'], // Files to lint
  languageOptions: {
    // Defining global variables
    globals: {
      node: true, // Node.js environment
      es6: true,  // ECMAScript 6 globals
    },
    ecmaVersion: 12, // Specify the ECMAScript version
  },
  extends: [
    'eslint:recommended', // Use the recommended rules from ESLint
  ],
  parserOptions: {
    ecmaVersion: 12,      // Allow modern ECMAScript features
    sourceType: 'module', // Allows using imports
  },
  rules: {
    'linebreak-style': ['error', 'unix'], // Enforce Unix linebreaks
    'quotes': ['error', 'single'],        // Enforce single quotes
    'semi': ['error', 'always'],          // Enforce semicolons
    'no-unused-vars': ['warn'],           // Warn on unused variables
    'no-console': 'off',                  // Allow console statements
  },
};
