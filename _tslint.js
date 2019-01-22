Object.defineProperty(exports, '__esModule', { value: true })

exports.rules = {
  'quotemark': {
    'options': ['single']
  },
  'whitespace': [
    true,
    'check-branch',
    'check-decl',
    'check-operator',
    'check-module',
    'check-type',
    'check-type-operator'
  ],
  'no-consecutive-blank-lines': true,
  'one-variable-per-declaration': [true, 'ignore-for-loop'],
  'no-conditional-assignment': true,
  'trailing-comma': [true, {'multiline': 'always', 'singleline': 'never'}],
  'semicolon': [true, 'never'],
  'only-arrow-functions': [true, 'allow-named-functions'],
  'space-before-function-paren': true,
  'triple-equals': true,
  'eofline': true,
  'ter-func-call-spacing': [true, 'never'],
  'new-parens': true,
  'no-arg': true,
  'no-constant-condition': true,
  'no-control-regex': true,
  'no-debugger': true,
  'no-duplicate-case': true,
  'no-eval': true,
  'no-ex-assign': true,
  'no-extra-boolean-cast': true,
  'no-switch-case-fall-through': true,
  'no-inner-declarations': [true, 'functions'],
  'no-invalid-regexp': true,
  'label-position': true,
  'ter-no-mixed-spaces-and-tabs': { 'type': 'spaces' },
  'no-multi-spaces': [true],
  'ter-no-proto': true,
  'no-duplicate-variable': [true, 'check-parameters'],
  'no-regex-spaces': true,
  'ter-no-self-compare': true,
  'ter-no-sparse-arrays': [true],
  'no-trailing-whitespace': true,
  'no-unnecessary-initializer': true,
  'no-unsafe-finally': true,
  'ter-padded-blocks': [false, 'never'],
  'space-in-parens': [true, 'never'],
  'comment-format': [true, 'check-space'],
  'use-isnan': true,
  'valid-typeof': true,
  'brace-style': [true, '1tbs'],
  'curly': true,
  'no-return-await': true,
  'class-name': true,
  'interface-name': [true, 'never-prefix'],
  'handle-callback-err': [true, '^(err|error)$'],
  'no-shadowed-variable': [ false ],
  'ordered-imports': false,
  'object-literal-sort-keys': false,
  'member-access': [true],
  'max-line-length': [true, 120],
  'variable-name': [
    true,
    'check-format',
    'allow-leading-underscore'
  ]
}

exports.extends = 'tslint-eslint-rules'