/*  webpack.prod.js */
const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config.js')
const config = require('../config')
const assetsPath = require('./utils').assetsPath
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = merge(webpackBaseConfig, {
  mode: config.build.env,
  entry: {
    nash: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: assetsPath('index.js'),
    // filename: '[name]/index.js',
    library: 'nash', // 类库导出
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': config.build.env
    }),
    new MiniCssExtractPlugin({
      filename: assetsPath('style.css')
    })
  ]
})
