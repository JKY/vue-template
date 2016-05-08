// https://github.com/shelljs/shelljs
require('shelljs/global')
env.NODE_ENV = 'production'

var path = require('path');
var config = require('../config').settings;
var ora = require('ora');
var webpack = require('webpack');
var opt = require('./webpack.conf');

opt['output']['filename'] =  'js/[name].[hash].js';
opt['output']['chunkFilename'] = 'js/[id].[hash].js';

var spinner = ora('building ...')
spinner.start()

webpack(opt, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
