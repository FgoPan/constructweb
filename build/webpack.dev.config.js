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
    proxy: [{
        context: ['/api'],
        target: 'http://10.2.37.17:12306/rest/test',
        pathRewrite: { '^/api': '' }
    }]
  }
}

module.exports = merge(commonConfig, devConfig)