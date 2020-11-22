const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')
const utils = require('./utils.js');
const merge = require('webpack-merge')
const fullPath = utils.fullPath;
const commonConfig = require('./webpack.common.config')
const SRC_PATH = fullPath('../src');

const publicConfig = {

  mode: 'production',

  devtool: 'cheap-module-source-map',

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      })
    ]
  },

  plugins: [
    new CleanWebpackPlugin()
  ]

}


// 打包list
let packageList = [
  {
    name: 'app',
    entry: `${SRC_PATH}/index.tsx`,
    tpl: path.join(__dirname, '../src/index.html')
  }
];


Array.isArray(packageList) && packageList.forEach(item => {
  commonConfig.entry[item.name] = [item.entry];
  commonConfig.plugins.push(utils.packHtml(item));
})


module.exports = merge(commonConfig, publicConfig)