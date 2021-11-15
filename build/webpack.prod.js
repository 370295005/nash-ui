/*  webpack.prod.js */
const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config.js')
const assetsPath = require('./utils').assetsPath
module.exports = merge(webpackBaseConfig, {
  devtool: 'source-map',
  mode: 'production',
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../lib'),
    // filename: assetsPath('index.js'), // 改成自己的类库名
    library: 'nash-ui', // 类库导出
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    // 外部化对vue的依赖
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ]
})
