var webpack = require('webpack'),
  path = require('path'),
  htmlWebPackPlugin = require('html-webpack-plugin'),

  BUILD_DIR = path.resolve(__dirname, './src/client/public/'),
  APP_DIR = path.resolve(__dirname, './src/client/app/'),
  htmlWebPackPluginConfig = new htmlWebPackPlugin({
    'template': './src/client/app/index.html',
    'filename': 'index.html',
    'inject': 'body'
  }),

  config = {
    'entry': APP_DIR + '/app.js',
    'output': {
      'path': BUILD_DIR,
      'filename': 'bundle.js'
    },
    'module': {
      'loaders': [
        { 'test': /\.js$/, 'loader': 'babel-loader', exclude: /node_modules/ },
        { 'test': /\.jsx$/, 'loader': 'babel-loader', exclude: /node_modules/ },
      ]
    },
    'plugins': [htmlWebPackPluginConfig]
  };

  module.exports = config;
