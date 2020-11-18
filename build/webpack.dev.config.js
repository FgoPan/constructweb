const merge = require('webpack-merge')
const path = require('path');
const webpack = require('webpack')

const commonConfig = require('./webpack.common.config')

const devConfig = {

  mode: 'development',

  devtool: 'source-map',

  devServer: {
    hot: true,
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 3798,
    // proxy: [{
    //     context: ['/WEB-CONFIG', '/pcop_framework'],
    //     target: 'http://localhost:3090'
    // }]
  }
}

module.exports = merge(commonConfig, devConfig)