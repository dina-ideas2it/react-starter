var webpack = require('webpack'),
  path = require('path'),

  BUILD_DIR = './src/client/public/',
  APP_DIR = './src/client/app/',

  config = {
    'entry': 'APP_DIR' + 'index.jsx',
    'output': {
      path: BUILD_DIR,
      filename: 'bundle.js'
    }
  };

  module.exports = config;
