const { merge } = require('webpack-merge')
const path = require('path')
const baseConfig = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = merge(baseConfig, {
  mode: 'development',
  entry: {
    app: '/example/index.js'
  },
  output: {
    publicPath: '/',
    filename: 'js/[name].[contenthash:8].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
    chunkFilename: 'js/[name].[contenthash:8].js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
      publicPath: '/',
      watch: true
    },
    hot: true,
    host: 'localhost',
    port: '3070',
    allowedHosts: 'auto',
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    },
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `index.html`,
      chunks: ['app'],
      template: 'example/index.html',
      scriptLoading: 'defer',
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
