const config = require('./webpack.build.js')
const path = require('path')
const assetsPath = require('./utils').assetsPath
const webpack = require('webpack')
const webpackModulesConfig = require('./webpack.modules.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
function buildPack(webpackConfig, component) {
  webpack(webpackConfig, (err, stats) => {
    if (err) throw err
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n'
    )
    component && component()
  })
}
function fullBuild(component) {
  buildPack(config, () => {
    config.plugins.splice(
      1,
      1,
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': 'production'
      })
    )
    buildPack(config, () => {
      component && component()
    })
  })
}
function modulesBuild() {
  buildPack(webpackModulesConfig, () => {
    webpackModulesConfig.output.filename = assetsPath('[name]/[name].min.js')
    webpackModulesConfig.output.chunkFilename = '[name]/[name].min.js'
    webpackModulesConfig.plugins.splice(1, 1, new MiniCssExtractPlugin({ filename: '[name]/[name].min.css' }))
  })
  buildPack(webpackModulesConfig, null)
}
fullBuild(modulesBuild)
