module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  globals: {
    android: true,
    WeixinJSBridge: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 7,
    sourceType: 'module',
    requireConfigFile: false
  },
  extends: ['standard', 'plugin:vue/essential', '@vue/prettier', 'plugin:prettier/recommended'],
  rules: {
    // 修复es6字符串拼接babel报错
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ['TemplateLiteral']
      }
    ],
    'template-curly-spacing': 0,
    // 部分规则
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 'off',
    'no-unused-vars': 'off',
    'vue/html-self-closing': 'off',
    'vue/no-v-html': 'off',
    'vue/attributes-order': 'off',
    'vue/order-in-components': 'off',
    'vue/require-component-is': 'off',
    'vue/no-unused-components': 'off',
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        printWidth: 120,
        useTabs: false,
        semi: false,
        singleQuote: true,
        trailingComma: 'none',
        endOfLine: 'auto',
        htmlWhitespaceSensitivity: 'ignore'
      }
    ]
  }
}
