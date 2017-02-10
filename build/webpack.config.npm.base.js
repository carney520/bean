/**
 * generate npm package
 */
var helpers = require('./helpers')
var path = require('path')

module.exports = {
  entry: {
    bean: './src/main.js'
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: './',
    filename: 'bean.js',
    library: 'bean',
    libraryTarget: 'umd'
  },

  resolve: {
    fallback: [path.join(__dirname, '../node_modules')],
    extensions: ['', '.js', '.vue']
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
        test: /\.js$/,
        loader: 'babel!eslint',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash:7]'
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.jade$/,
        loader: 'jade',
        include: /assets/
      }
    ].concat(helpers.loaderStyles())
  },

  vue: {
    loaders: {
      js: 'babel!eslint'
    }
  },

  eslint: {
    formatter: require('eslint-friendly-formatter')
  },

  sassLoader: {
    includePaths: [
      path.dirname(require.resolve('sassbean')) // sass-bean
    ]
  }
}
