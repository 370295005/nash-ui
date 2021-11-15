const path = require('path')
const assetsPath = require('./utils').assetsPath
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/index.js'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
    extensions: ['.vue', '.js']
  },
  output: {
    filename: assetsPath('[name].min.js'),
    chunkFilename: '[name].min.js',
    path: path.resolve(__dirname, '../lib'),
    library: 'nash-ui', // 类库导出
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
        include: path.resolve(__dirname, '../src')
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
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
        test: /.js/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        include: path.resolve(__dirname, '../src'),
        exclude: /node_module/
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: 'style.min.css'
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
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
