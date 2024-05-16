module.exports = {
    env: { browser: true, es2021: true },
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended', 'airbnb', 'plugin:storybook/recommended'],
    rules: {
        'prettier/prettier': ['warn', { endOfLine: 'auto' }],
    },
};
