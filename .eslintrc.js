module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'airbnb/hooks',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: [
                    '.js',
                    '.jsx',
                    '.ts',
                    '.tsx',
                ],
            },
        },
    },
    rules: {
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/jsx-tag-spacing': ['error', {
            closingSlash: 'never',
            beforeSelfClosing: 'never',
            afterOpening: 'never',
            beforeClosing: 'allow',
        }],
        'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
        'react/state-in-constructor': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'arrow-body-style': 'off',
        'import/prefer-default-export': 'off',
        'padded-blocks': ['error', {
            blocks: 'never', classes: 'always', switches: 'never',
        }],
        'object-curly-newline': ['error', {
            ObjectExpression: { multiline: true, minProperties: 3 },
            ObjectPattern: { multiline: true, minProperties: 3 },
            ImportDeclaration: 'never',
            ExportDeclaration: { multiline: true, minProperties: 3 },
        }],
        'class-methods-use-this': 'off',
        'no-unused-vars': 'off',
        'react/destructuring-assignment': 'off',
    },
};
