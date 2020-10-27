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

    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    })
  ]

}


// 打包list
let packageList = [
  {
    name: 'sysmanager',
    entry: `${SRC_PATH}/sysmanager.js`,
    tpl: path.join(__dirname, '../src/sysmanager.html')
  },
  {
    name: 'appDemo',
    entry: `${SRC_PATH}/appDemo.js`,
    tpl: path.join(__dirname, '../src/appDemo.html')
  },
  {
    name: 'appConsoleDemo',
    entry: `${SRC_PATH}/appConsoleDemo.js`,
    tpl: path.join(__dirname, '../src/appConsoleDemo.html')
  }
];


Array.isArray(packageList) && packageList.forEach((item, index) => {
  commonConfig.entry[item.name] = [item.entry];
  commonConfig.plugins.push(utils.packHtml(item));
})


module.exports = merge(commonConfig, publicConfig)