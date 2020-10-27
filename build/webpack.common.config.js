const path = require('path');

// 辅助函数
const utils = require('./utils.js');
const fullPath = utils.fullPath;
// 项目源码路径
const SRC_PATH = fullPath('../src');
// 产出路径
const DIST_PATH = fullPath('../dist');

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const UnusedWebpackPlugin = require('unused-webpack-plugin');


let args = process.argv
const __DEV__ = args.join('').indexOf('.dev.') > -1;

const commonConfig = {

  /* 入口 */
  entry: {
    app: [SRC_PATH + '/index.tsx']
  },

  /* 输出到dist文件夹，输出文件名为bundle.js */
  output: {
    path: DIST_PATH,
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['cache-loader', 'ts-loader'],
        include: SRC_PATH,
      },
      {
        test: /\.tsx?$/,
        use: ['cache-loader', 'ts-loader'],
        include: SRC_PATH,
      },
      {
          test: /\.(ts|tsx)$/,
          loader: ['eslint-loader'],
          enforce: 'pre',
          include: SRC_PATH
      },
      // {
      //   test: /\.(ts|tsx)$/,
      //   use: [
      //     {
      //       loader: 'tslint-loader'
      //     },
      //     {
      //       loader: 'ts-loader'
      //     }
      //   ],
      //   exclude: /node_modules/,
      //   include: SRC_PATH
      // },
      {
        test: /\.(png|jpg|gif|eot|svg|ttf|woff)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      // use: MiniCssExtractPlugin.loader({
      //     fallback: 'style-loader',
      //     use: ['css-loader',
      //         {
      //             loader: 'less-loader',
      //             options: {
      //                 javascriptEnabled: true
      //             }
      //         }]
      // })
      }]
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    mainFiles: ['index'],
    alias: {
      app: path.join(__dirname, '../src/application'),
      components: path.join(__dirname, '../src/components'),
      routers: path.join(__dirname, '../src/routers'),
      utils: path.join(__dirname, '../src/utils'),
      hooks: path.join(__dirname, '../src/hooks'),
      '@': SRC_PATH
    }
  },

  optimization: {
    runtimeChunk: false,
    /* splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        } */
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../src/index.html'),
      chunks: ['app', 'vendors'],
      hash: __DEV__ ? false : true,
      timeTag: new Date().getTime(),
    }),
    new MiniCssExtractPlugin(),
    // new BundleAnalyzerPlugin(),
    // new UnusedWebpackPlugin({
    //     directories: [path.join(__dirname, '../src')],
    //     exclude: ['*.test.js'],
    //     root: __dirname,
    // }),
  ],

  externals: {
  }

}


// 打包list
// let packageList = [
//     {
//         name: 'console',
//         entry: `${SRC_PATH}/console.js`,
//         tpl: SRC_PATH + '/console.html'
//     },
//     {
//         name: 'sysmanager',
//         entry: `${SRC_PATH}/sysmanager.js`,
//         tpl: SRC_PATH + '/sysmanager.html'
//     },
// ];

// Array.isArray(packageList) && packageList.forEach((item, index) => {
//     commonConfig.entry[item.name] = [
//         item.entry];
//     commonConfig.plugins.push(utils.packHtml(item));
// })

module.exports = commonConfig;