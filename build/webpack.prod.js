/*  webpack.prod.js */
const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const EslintWebpackPlugin = require('eslint-webpack-plugin')
const assetsPath = (_path) => {
  return path.posix.join('', _path)
}
const resolve = (_path) => {
  return path.resolve(__dirname, _path)
}
const entry = {
  index: path.resolve(__dirname, '../src/index.js')
}
const getEntry = () => {
  const files = glob.sync('src/modules/*/index.js')
  files.forEach((path) => {
    const length = path.length
    // 获取名字
    const name = path.substring(12, length - 9)
    const pathName = resolve('../' + path)
    entry[name] = pathName
  })
}
getEntry()
module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  entry,
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: (pathData) => (pathData.chunk.name === 'index' ? 'index.js' : assetsPath('[name]/index.js')),
    library: 'nash', // 类库导出
    libraryTarget: 'umd',
    umdNamedDefine: true,
    clean: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: (pathData) => (pathData.chunk.name === 'index' ? 'index.min.css' : '[name]/[name].css')
    }),
    new EslintWebpackPlugin()
  ],
  minimize: true,
  minimizer: [
    new TerserPlugin({
      // 去除额外注释
      extractComments: false
    })
  ],
  devtool: false,
  stats: 'errors-only'
})
