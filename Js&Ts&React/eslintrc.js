/**
 * eslint-plugin-html
 * eslint-plugin-react
 * eslint-plugin-import
 * eslint-config-airbnb-base
 * eslint-import-resolver-webpack
 *
 * eslint-config-airbnb
 * eslint-plugin-react
 * eslint-plugin-import
 * eslint-plugin-jsx-a11y
 */

const path = require('path');

module.exports = {
    'root': true,
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true,
        }
    },
    'env': {
        'browser': true,
        "node": true,
        'es6': true,
    },
    'plugins': [
        "jsx-a11y",
        "react",
    ],
    'extends': [
        "airbnb", // eslint-config-airbnb
    ],
    'settings': {
        "html/html-extensions": [".html"],
        "react": {
            "createClass": "createReactClass",
            "pragma": "React",
            "version": "16.8"
        }
    },
    'rules': {},
    // 通过overrides控制.ts、.tsx后缀的校验
    "overrides": [
        {
            "files": ["**/*.ts", "**/*.tsx"],
            "env": { "browser": true, "es6": true, "node": true },
            "extends": [
                // "eslint:recommended",
                "plugin:react/recommended",
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended"
            ],
            "parser": "@typescript-eslint/parser",
            "parserOptions": {
                "ecmaFeatures": { "jsx": true },
                "ecmaVersion": 6,
                "sourceType": "module",
                "project": "./tsconfig.json"
            },
            "plugins": ["react", "import", "react-hooks", "@typescript-eslint"],
            "rules": {
                '@typescript-eslint/camelcase': ['off', {properties: 'always'}],
            },
            "settings": {},
        }
    ]
}
