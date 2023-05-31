const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  extends: ['react-app', 'prettier', 'plugin:jsx-a11y/recommended'],
  plugins: ['prettier', 'jsx-a11y'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'prettier/prettier': ['warn', prettierOptions],
        'import/order': [
          'error',
          {
            groups: [
              'index',
              'sibling',
              'parent',
              'internal',
              'external',
              'builtin',
              'object',
              'type',
            ],
          },
        ],
      },
    },
  ],
  ignorePatterns: ['config/', 'docker/'],
};
