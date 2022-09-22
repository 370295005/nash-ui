module.exports = {
  // 详细输出信息
  verbose: true,
  // 要测试的文件扩展名
  moduleFileExtensions: ['jsx', 'js', 'cjs', 'ts', 'tsx', 'vue', 'node'],
  // 转换器，根据后缀确定转换器
  transform: {
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    '^.+\\jsx?$': '<rootDir>/node_modules/babel-jest'
  },
  // 别名目录
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  // 快照测试插件
  snapshotSerializers: ['jest-serializer-vue'],
  // 测试文件匹配
  // testMatch: [
  //   './test/*.spec.(js|jsx|ts|tsx)',
  //   './test/units/*.spec.(js|jsx|ts|tsx)',
  //   './test/components/*.spec.(js|jsx|ts|tsx)'
  // ],
  // 测试覆盖的文件
  collectCoverageFrom: ['src/components/*.{jsx,tsx,vue}', 'src/util/*.{js,ts}'],
  // jest输出覆盖率文件目录
  coverageDirectory: '<rootDir>/test/coverage',
  // 是否输出覆盖率
  collectCoverage: true,
  coverageReporters: ['lcov', 'text-summary'],
  testURL: 'http://localhost:3070'
}
