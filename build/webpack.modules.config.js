const fs = require('fs')
const path = require('path')
const config = require('../config')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin')
const baseConfig = require('./webpack.config')
const assetsPath = require('./utils').assetsPath
const modules = {}
const cPath = path.join(__dirname, '../src/modules')
const files = fs.readdirSync(cPath)
if (files) {
  files.forEach((name) => {
    const p = path.join(cPath, name)
    if (fs.statSync(p).isDirectory()) {
      modules[name] = p
    }
  })
}
module.exports = merge(baseConfig, {
  mode: config.build.env,
  entry: modules,
  output: {
    path: config.build.path,
    filename: assetsPath('[name]/index.js'),
    library: ['nash', '[name]'],
    libraryTarget: 'umd'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: assetsPath('[name]/style.css')
    }),
    new OptimizeCssPlugin({
      cssProcessorOptions: {
        safe: true
      }
    })
  ]
})
