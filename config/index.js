// webpack config variables
var path = require("path");

module.exports = {
  build: {
    env: require("./prod.env"),
    assetsRoot: path.resolve(__dirname, "../dist"),
    assetsSubDirectory: "/static/",
    // assetsPublicPath: 'http://cdn.com/dist/',
    assetsPublicPath: "https://occc3ev3l.qnssl.com/xueer/",
    productionSourceMap: false,
    bundleAnalyzerReport: false
  },
  dev: {
    env: require("./dev.env"),
    assetsPublicPath: "/dist/"
  }
};
