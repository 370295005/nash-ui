const { merge } = require('webpack-merge')
const path = require('path')
const config = require('./webpack.config')
module.exports = merge(config, {
  mode: 'development',
  output: {
    publicPath: '/',
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '../'),
      publicPath: '/',
      // 文件更改是否触发整个页面的更改
      watch: true
      // 热更新开启
    },
    hot: true,
    host: 'localhost',
    port: '9000',
    allowedHosts: 'auto',
    client: {
      // 显示百分比
      progress: true,
      overlay: {
        // 出现错误时全屏覆盖提示
        // 只显示错误信息
        errors: true,
        warnings: false
      }
    },
    // 自动打开默认浏览器
    open: false
  },
  // 构建目标
  target: 'web',
  devtool: 'eval-cheap-module-source-map'
})
