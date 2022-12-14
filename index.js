module.exports = {
    parser: '@typescript-eslint/parser',
    // Specifies the ESLint parser
    parserOptions: {
        'ecmaVersion': 2020,
        // Allows for the parsing of modern ECMAScript features
        'sourceType': 'module',
        // Allows for the use of imports
        'ecmaFeatures': {
            'jsx': true
            // Allows for the parsing of JSX
        }
    },
    env: {
        'browser': true,
        'es2020': true
    },
    settings: {
        'react': {
            'version': 'detect'
            // Tells eslint-plugin-react to automatically detect the version of React to use
        },
        'import/resolver': {
            'node': {
                'paths': ['src'],
                'extensions': ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    },
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'prettier/react',
    ],
    plugins: [
        'react',
        'prettier',
        'react-hooks',
        '@typescript-eslint'
    ],
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-inferrable-types': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/prefer-as-const': 0,
        '@typescript-eslint/no-unused-vars': ['warn', { 'varsIgnorePattern': '^React' }],
        '@typescript-eslint/no-shadow': 0,
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/ban-ts-comment': 'off',
        'no-fallthrough': 0,
        'no-unused-vars': ['warn', { 'varsIgnorePattern': '^React' }],
        'no-use-before-define': 0,
        'no-shadow': 0,
        'react/display-name': 0,
        'react/prop-types': 0,
        'react/react-in-jsx-scope':  0,
        'react/jsx-filename-extension': [ 'warn', {'extensions': ['.tsx']} ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'import/prefer-default-export': 0,
        'react/no-unescaped-entities': 0
    },
}