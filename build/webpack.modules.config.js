const path = require('path')
const assetsPath = require('./utils').assetsPath
const fs = require('fs')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.build.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const modules = {}
const cPath = path.join(__dirname, '../src/modules')
const files = fs.readdirSync(cPath)
if (files) {
  files.forEach(function(name) {
    const p = path.join(cPath, name)
    if (fs.statSync(p).isDirectory()) {
      modules[name] = p
    }
  })
}
module.exports = merge(baseConfig, {
  entry: modules,
  devtool: false,
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: assetsPath('[name]/index.js'),
    library: ['nash', '[name]'],
    libraryTarget: 'umd'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]/style.css',
      chunkFilename: 'style.chunk.css'
    })
  ]
})
