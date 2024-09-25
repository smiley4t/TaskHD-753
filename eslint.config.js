
module.exports = {
    env: {
        browser: true, // Browser global variables
        es6: true,  // ECMAScript 2021 features
        node: true,    // Node.js global variables and Node.js scoping
    },
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
};
