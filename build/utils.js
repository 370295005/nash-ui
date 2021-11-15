const posix = require('path').posix
exports.assetsPath = path => {
  return posix.join('', path)
}
