'use strict'
const release = "fancywonderland-1.0.9";
process.env.RELEASE_VERSION = release;
module.exports = {
  NODE_ENV: '"production"',
  RELEASE_VERSION: `"${release}"`
}
