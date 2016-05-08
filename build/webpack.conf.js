var path = require('path');
var config = require('../config').settings;
var utils = require('./utils');
var webpack = require('webpack');
var projectRoot = path.resolve(__dirname, '../views');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var opt = {
    entry: {
        app: './views/src/main.js'
    },
    output: {
        path: config.build.output,
        publicPath: '/', //内存地址
        filename: config.appname + '.js'
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        fallback: [path.join(__dirname, '../node_modules')]
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
              loader: 'babel',
              include: projectRoot,
              exclude: /node_modules/
            },
            {
              test: /\.json$/,
              loader: 'json'
            },
            {
              test: /\.html$/,
              loader: 'vue-html'
            },
            {
              test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
              loader: 'url?limit=2048&context=client&name=[path][name].[ext]'
            },
            {
              test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
              loader: 'url'
            },

        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'views/src/index.html',
          inject: true,
          minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeAttributeQuotes: true
          }
        })
    ],
    vue: {
        loaders: utils.cssLoaders()
    }
};

if(config['dev'] === true){
    // add hot-reload related code to entry chunks
    Object.keys(opt.entry).forEach(function (name) {
      opt.entry[name] = ['./build/dev-client'].concat(opt.entry[name])
    });
    /* plugins */
    opt['plugins'] = opt['plugins'].concat([
        new webpack.HotModuleReplacementPlugin(),
    ]);
}else{
    opt['plugins'] = opt['plugins'].concat([
        new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false
            }
        }),
        new ExtractTextPlugin('[name].[contenthash].css'),
    ]);
};
module.exports = opt;

