/*  webpack.prod.js */
const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const assetsPath = (_path) => {
  return path.posix.join('', _path)
}
module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  entry: {
    nash: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: assetsPath('index.js'),
    library: 'nash', // 类库导出
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': process.env.NODE_ENV
    }),
    new MiniCssExtractPlugin({
      filename: assetsPath('style.css')
    })
  ]
})
