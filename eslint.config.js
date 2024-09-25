
module.exports = {
  files: ['**/*.js'], // Files to lint
  languageOptions: {
    // Defining global variables
    globals: {
      node: true, // Node.js environment
      es6: true,  // ECMAScript 6 globals
    },
    ecmaVersion: 12,
    parserOptions: {
        sourceType: 'module', // Allows using imports
      },// Specify the ECMAScript version
  },
  
 
  rules: {
    'linebreak-style': ['error', 'unix'], // Enforce Unix linebreaks
    'quotes': ['error', 'single'],        // Enforce single quotes
    'semi': ['error', 'always'],          // Enforce semicolons
    'no-unused-vars': ['warn'],           // Warn on unused variables
    'no-console': 'off',                  // Allow console statements
  },
};
