const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
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
        test: /.(jpg|png|gif|jpeg|svg|webp)/,
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
        test: /.(eot|ttf|woff2?)$/,
        use: {
          loader: 'file-loader',
          options: {
            esModule: false,
            name: 'fonts/[name].[ext]'
          }
        },
        exclude: /node_module/
      },
      {
        test: /.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        include: path.resolve(__dirname, '../src'),
        exclude: /node_module/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_module/
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CssMinimizerPlugin({
      minimizerOptions: {
        preset: [
          'default',
          {
            discardComments: { removeAll: true }
          }
        ]
      }
    })
  ],
  stats: {
    children: false,
    modules: false,
    assets: false
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'eval-cheap-module-source-map',
  target: 'web',
  optimization: {
    chunkIds: 'deterministic',
    innerGraph: false,
    moduleIds: 'size',
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxSize: 20000,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true
        },
        betterScroll: {
          name: 'better-scorll',
          test: /[\\/]node_modules[\\/]better-scroll/,
          minChunks: 1,
          priority: 1,
          minSize: 0
        }
      }
    }
  }
}
