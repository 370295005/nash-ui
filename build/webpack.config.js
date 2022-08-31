const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json', 'jsx'],
    alias: {
      '@': path.resolve('__dirname', '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /.(jpg|png|gif|jpeg|svg)/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 40960,
            name: 'img/[name].[hash:8].[ext]',
            publicPath: '/',
            esModule: false,
            fallback: {
              loader: 'file-loader'
            }
          }
        },
        exclude: /node_modules/
      },
      {
        test: /.(mp4|mp3|m3u8)/,
        use: {
          loader: 'file-loader',
          options: {
            esModule: false,
            name: 'media/[name].[contenthash:8].[ext]'
          }
        },
        exclude: /node_modules/
      },
      {
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        exclude: /node_module/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_module/
      }
    ]
  },
  plugins: [new VueLoaderPlugin()],
  stats: {
    children: false,
    modules: false,
    assets: false
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'eval-cheap-module-source-map',
  target: 'web'
}
