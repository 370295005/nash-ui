/*
 * @Author: yeenjian<1793147874@qq.com>
 * @Date: 2020-05-26 15:40:06
 * @LastEditors: yeenjian
 * @LastEditTime: 2020-08-17 14:20:48
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module'
  },
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
    'vue/no-unused-components': 'off'
  }
}
