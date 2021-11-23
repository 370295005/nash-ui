const path = require('path')
module.exports = {
  build: {
    env: 'production',
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/',
    assetsPath: ''
  },
  dev: {
    env: 'development',
    port: '9000',
    publicPath: '/',
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
    assetsPath: ''
  }
}
