var webpack = require('webpack')
var pkg = require('../package.json')
var baseConfig = require('./webpack.config.npm.base.js')
var merge = require('webpack-merge')
var helpers = require('./helpers')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var ProgressBarPlugin = require('progress-bar-webpack-plugin')

var webpackConfig = {
  devtool: false,
  module: {
    loaders: helpers.loaderStyles({extract: true})
  },
  plugins: [
    new ProgressBarPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: "'production'"
      }
    }),
    new webpack.BannerPlugin(`Bean v${pkg.version}\nLicensed under the ${pkg.license} license.`, {
      entryOnly: false
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin('bean.css')
  ],
  vue: {
    loaders: Object.assign({
      js: 'babel',
      autoprefixer: {
        browsers: ['not ie <= 8', 'last 2 versions']
      }
    }, helpers.vueStyles({extract: true}))
  }
}

module.exports = merge(baseConfig, webpackConfig)
