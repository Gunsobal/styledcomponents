module.exports = {
    verbose: true,
    roots: ['src'],
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/'
    ],
    setupTestFrameworkScriptFile: '<rootDir>/jest.setup.js',
    transform: {'.*': '<rootDir>/node_modules/jest-css-modules'}
}