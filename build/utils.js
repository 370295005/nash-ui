const path = require('path')
const config = require('../config')
const env = process.env.NODE_ENV
exports.assetsPath = (_path) => {
  const outputPath = env === 'production' ? config.build.assetsPath : config.dev.assetsPath
  return path.posix.join(outputPath, _path)
}
