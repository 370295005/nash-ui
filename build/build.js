const shell = require('shelljs')
const path = require('path')
const ora = require('ora')
const webpack = require('webpack')
const assetsPath = require('./utils').assetsPath
const modulesConfig = require('./webpack.modules.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const prodConfig = require('./webpack.prod')
const config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.build.env)
}
const assetPath = path.join(config.build.path, config.build.assetsPath)
shell.rm('-rf', assetPath)
shell.mkdir('-p', assetPath)
function buildPack(prodConfig, cb, text) {
  const spinner = ora(text || 'building...')
  spinner.start()
  webpack(prodConfig, (err) => {
    spinner.stop()
    if (err) {
      throw err
    }
    cb && cb()
  })
}
function fullBuild(cb) {
  // build index.js
  buildPack(
    prodConfig,
    () => {
      // build nash.min.js
      prodConfig.output.filename = assetsPath('[name].min.js')
      prodConfig.output.chunkFilename = '[name].min.js'
      prodConfig.plugins.splice(
        1,
        1,
        new MiniCssExtractPlugin({
          filename: assetsPath('[name].min.css')
        }),
        new OptimizeCssPlugin({
          cssProcessorOptions: {
            safe: true
          }
        }),
        new UglifyJsPlugin()
      )
      buildPack(
        prodConfig,
        () => {
          cb && cb()
        },
        'building nash.min.js'
      )
    },
    'building index.js'
  )
}
function modulesBuild() {
  buildPack(
    modulesConfig,
    () => {
      modulesConfig.output.filename = assetsPath('[name]/[name].min.js')
      modulesConfig.output.chunkFilename = '[name]/[name].min.js'
      prodConfig.plugins.splice(
        1,
        1,
        new MiniCssExtractPlugin({
          filename: '[name].min.css'
        }),
        new OptimizeCssPlugin({
          cssProcessorOptions: {
            safe: true
          }
        }),
        new UglifyJsPlugin()
      )
      buildPack(modulesConfig, null, 'building for ${module}/${module}.min.js')
    },
    'building for ${module}/index.js'
  )
}
fullBuild(modulesBuild)
