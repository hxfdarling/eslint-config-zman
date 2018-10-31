module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    mocha: true,
    node: true,
    worker: true,
    serviceworker: true,
  },
  extends: ['eslint-config-airbnb'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    ecmaVersion: 6,
  },
  plugins: ['react', 'babel'],
  rules: {
    'array-callback-return': 0,
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'class-methods-use-this': 0,
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    'consistent-return': 0,
    curly: [2, 'all'],
    'func-names': 0,
    'function-paren-newline': 0,
    'import/extensions': {
      js: 'never',
      json: 'never',
      svg: 'always',
    },
    'import/no-extraneous-dependencies': [
      0,
      {
        devDependencies: ['/src', '/test'],
        peerDependencies: 0,
      },
    ],
    'import/no-unresolved': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 0,
    'jsx-a11y/no-noninteractive-tabindex': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'linebreak-style': 0,
    'max-len': [
      2,
      {
        code: 120,
      },
    ],
    'no-console': 0,
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],
    'no-mixed-operators': [
      'error',
      {
        allowSamePrecedence: true,
        groups: [['&', '|', '^', '~', '<<', '>>', '>>>'], ['&&', '||']],
      },
    ],
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-return-assign': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': 0,
    'object-curly-newline': 0,
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'prefer-destructuring': [
      'error',
      {
        AssignmentExpression: {
          array: false,
          object: false,
        },
        VariableDeclarator: {
          array: false,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/no-did-mount-set-state': 0,
    'react/prop-types': 0,
    'space-before-function-paren': 0,
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'no-sync': 0,
  },
};
