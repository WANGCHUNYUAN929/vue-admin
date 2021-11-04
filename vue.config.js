/*
 * @Descripttion:
 * @version:
 * @Author: WANGCHUNYUAN
 * @Date: 2021-11-03 19:53:57
 * @LastEditTime: 2021-11-04 13:40:25
 */
const path = require('path')
module.exports = {
  outputDir: `dist`,
  chainWebpack: (config) => {
    config.resolve.alias.set('@js', path.join(__dirname, './src/assets/js'))
    config.resolve.alias.set('@css', path.join(__dirname, './src/assets/css'))
    config.resolve.alias.set('@img', path.join(__dirname, './src/style'))
    config.resolve.alias.set('@c', path.join(__dirname, './src/components'))
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@css/variable.scss";`
      },
      scss: {
        prependData: `@import "~@css/variable.scss";`
      }
    },
    sourceMap: true
  }
}
