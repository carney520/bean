/**
 * generate docs
 */
var path = require('path')
var pkg = require('../package.json')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var projectRoot = path.resolve(__dirname, '../')
var helpers = require('./helpers')

module.exports = {
  entry: {
    app: './docs/main.js'
  },

  output: {
    path: path.resolve(__dirname, '../site'),
    filename: '[name].js'
  },

  resolve: {
    fallback: [path.join(__dirname, '../node_modules')],
    extensions: ['', '.js', '.vue'],
    alias: {
      'src': path.resolve(__dirname, '../docs'),
      'views': path.join(__dirname, '../docs/views'),
      'assets': path.join(__dirname, '../docs/assets')
    }
  },

  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },

  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'images/[name].[ext]?[hash:7]'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.jade$/,
        loader: 'jade'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ].concat(helpers.loaderStyles())
  },

  plugins: [
    new HtmlWebpackPlugin(
      {
        title: pkg.name,
        filename: 'index.html',
        template: path.join(projectRoot, 'docs/assets/index.jade'),
        inject: true
      }
    )

  ],

  vue: {
    loaders: Object.assign({
      js: 'babel',
      autoprefixer: {
        browsers: ['not ie <= 8', 'last 2 versions']
      }
    }, helpers.vueStyles())
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  sassLoader: {
    includePaths: [
      path.join(projectRoot, 'docs/assets/sass'),
      path.dirname(require.resolve('sassbean')) // sass-bean
    ]
  }
}
