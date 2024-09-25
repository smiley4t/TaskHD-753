
module.exports = {
    files: ['**/*.js'],
    languageOptions: {
      // Defining global variables previously declared in the "env" key
      globals: {
        node: true, // Node.js environment
        es6: true,  // ECMAScript 6 globals
      },
      // Specify the ECMAScript version to use (you can adjust this based on your project)
      
    
    extends: [
        'eslint:recommended', // Use the recommended rules from ESLint
    ],
    parserOptions: {
        ecmaVersion: 12,      // Allow modern ECMAScript features
        sourceType: 'module', // Allows using imports
    },
    rules: {
        'linebreak-style': ['error', 'unix'], // Linebreak style
        'quotes': ['error', 'single'],         // Single quotes
        'semi': ['error', 'always'],           // Always use semicolons
        'no-unused-vars': ['warn'],             // Warn on unused variables
        'no-console': 'off',                     // Allow console statements (or change to 'warn')
    },
}
