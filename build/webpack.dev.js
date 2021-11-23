const { merge } = require('webpack-merge')
const path = require('path')
const baseConfig = require('./webpack.config')
const config = require('../config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = merge(baseConfig, {
  mode: config.dev.env,
  entry: {
    app: '/example/index.js'
  },
  output: {
    publicPath: config.dev.publicPath,
    filename: config.dev.filename,
    path: config.dev.path,
    clean: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../example')
    }
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
      publicPath: '/',
      watch: true
    },
    hot: true,
    host: 'localhost',
    port: config.dev.port,
    allowedHosts: 'auto',
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    },
    open: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `index.html`,
      chunks: ['app'],
      template: 'example/public/index.html',
      scriptLoading: 'defer',
      favicon: '',
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: false
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].min.css'
    })
  ]
})
