module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript/base'
    ],
    ignorePatterns: [ '.eslintrc.js', 'test' ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/import':'off',
        'max-len': [2, {'code': 120, 'ignoreUrls': true, 'ignoreStrings': true}],
        'max-classes-per-file' : 'off',
        'indent': 'off',
        '@typescript-eslint/indent': 'off',
        'class-methods-use-this': 'off',
        'no-console': 'error',
        'no-param-reassign': 'off',
        'import/first': ["off"],
        'import/no-cycle': ["off"],
        'no-underscore-dangle': 'off',
    },
};