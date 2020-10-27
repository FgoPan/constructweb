let glob = require('glob');
let path = require('path');
let _ = require('lodash')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let args = process.argv
const __DEV__ = args.join('').indexOf('.dev.') > -1;

exports.pickFiles = function (options) {
    let files = glob.sync(options.pattern);
    return files.reduce(function(data, filename) {
        let matched = filename.match(options.id);
        let name = matched[1];
        data[name] = path.resolve(__dirname, filename);
        return data;
    }, {});
};

function fullPath(dir) {
    return path.resolve(__dirname, dir);
}
exports.fullPath = fullPath

exports.getIP = function() {
    let os = require('os');
    let IPv4 = '127.0.0.1';
    let interfaces = os.networkInterfaces();
    _.forEach(interfaces, (interfaceItem) => {
        _.some(interfaceItem, (details) => {
            if (details.family === 'IPv4' && !details.internal) {
                IPv4 = details.address;
                return true;
            }
        })
    })
    return IPv4;
}

// 生成html
// 项目源码路径
const SRC_PATH = fullPath('../src');
// 产出路径
const DIST_PATH = fullPath('../dist');

exports.packHtml = function packHtml(item) {
    let { name, tpl } = item;
    tpl = tpl || `${SRC_PATH}/index.html`;
    return new HtmlWebpackPlugin({
        // favicon: SRC_PATH + '/img/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
        filename: DIST_PATH + '/' + name + '.html', // 生成的html存放路径，相对于path
        template: tpl, // html模板路径
        hash: __DEV__ ? false : true, // 为静态资源生成hash值
        timeTag: new Date().getTime(),
        chunks: [name, 'components', 'vendors'], // 需要引入的chunk，不配置就会引入所有页面的资源
        minify: __DEV__ ? false : { // 压缩HTML文件
            removeComments: true, // 移除HTML中的注释
            collapseWhitespace: false, // 删除空白符与换行符
            collapseInlineTagWhitespace: true,
            removeRedundantAttributes: true,
            removeEmptyAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true
        }
    })
}
