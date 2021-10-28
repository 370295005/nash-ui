const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin-for-multihtml')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  entry: {
    app: '/example/index.js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../example')
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
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.styl(us)?$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ]
      },
      {
        test: /.(jpg|png|gif|jpeg|svg)/,
        use: {
          // 小于40k的打包成base64，其他的走file-loader
          loader: 'url-loader',
          options: {
            limit: 40960,
            name: 'img/[name].[hash:8].[ext]',
            publicPath: '/',
            // 关闭es6模块
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
        // webpack5自带，体积会大很多
        // type: 'asset/source',
        use: {
          loader: 'file-loader',
          options: {
            esModule: false,
            name: 'media/[name].[contenthash:8].[ext]'
          }
        },
        exclude: /node_modules/
      },
      // 只能将es6 7 8语法转成es5 promise proxy 等不会转换 使用babel-polyfill转换
      {
        test: /.js/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        include: path.resolve(__dirname),
        exclude: /node_module | ^TcPlayer/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: path.resolve(__dirname, '/')
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].min.css'
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
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
      // meta: {
      //   keywords: 'ui,components',
      //   author: '370295005@qq.com',

      // }
    })
  ],
  optimization: {
    // 选择模块id算法
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    // 移除空的chunk
    removeEmptyChunks: true,
    // 合并含有相同模块的chunk
    mergeDuplicateChunks: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  stats: {
    children: false,
    modules: false,
    assets: false
  }
}
