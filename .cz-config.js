module.exports = {
  types: [
    { value: 'feat', name: 'feat: 增加新功能' },
    { value: 'fix', name: 'fix: 修复bug' },
    {
      value: 'style',
      name: 'style: 不影响现有功能的情况下修改样式'
    },
    {
      value: 'refactor',
      name: 'refactor: 代码重构'
    },
    { value: 'revert', name: 'revert: 回滚commit' },
    {
      value: 'chore',
      name: 'chore: 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）'
    },
    { value: 'docs', name: 'docs: 只修改文档' },
    {
      value: 'perf',
      name: 'perf: 性能优化'
    },
    { value: 'test', name: 'test: 增加测试' },
    { value: 'merge', name: 'merge: 合并分支' },
    { value: 'deps', name: 'deps: 修改package(-lock).json' }
  ],

  scopes: [
    ['components', '组件相关'],
    ['hooks', 'hook 相关'],
    ['utils', 'utils 相关'],
    ['docs', '文案文案相关'],
    ['styles', '样式相关'],
    ['deps', '项目依赖'],
    ['other', '其他修改']
    // 如果选择 custom，后面会让你再输入一个自定义的 scope。也可以不设置此项，把后面的 allowCustomScopes 设置为 true
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`
    }
  }),

  messages: {
    type: '选择提交的类型:',
    scope: '\n 选择一个scope:',
    // used if allowCustomScopes is true
    customScope: '输入自定义scope:',
    subject: '填写简短精炼的变更描述:\n',
    body: '填写更加详细的变更描述（可选）。使用 "|" 换行:\n',
    breaking: '列举非兼容性重大的变更（可选）:\n',
    footer: '列举出所有变更（可选）:\n',
    confirmCommit: '确认提交？'
  },

  allowCustomScopes: true,
  // 设置只有 type 选择了 feat 或 fix，才询问 breaking message
  allowBreakingChanges: ['feat', 'fix'],
  // 跳过要询问的步骤
  skipQuestions: ['body', 'footer'],
  // subject 限制长度
  subjectLimit: 100,
  breaklineChar: '|' // 支持 body 和 footer
}
