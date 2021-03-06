const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  outputDir: 'docs',
  devServer: {
    disableHostCheck: true
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('text-loader')
      .loader('text-loader')
      .end()

    config.module
      .rule('html')
      .test(/\.html$/)
      .use('html-loader')
      .loader('html-loader')
      .end()

    config.resolve.extensions
      .add('.jsx')

    config.resolve.alias
      .set('@src', resolve('src'))
      .set('@LIB', resolve('components'))
      .set('@vc', resolve('src/components'))
  }
}
