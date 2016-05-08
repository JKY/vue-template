/**
 * Module dependencies.
 */
var express = require('express'),
	config = require('./config').settings,
	color = require('colors'),
	util = require('./lib/util'),
	webpack = require('webpack'),
	proxyMiddleware = require('http-proxy-middleware'),
  sys = require('sys');

var webpackConfig = require('./build/webpack.conf');

var compiler = webpack(webpackConfig);
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
});

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
});



//var minify = require('express-minify');
var app = module.exports = express();
app.enable('trust proxy');
//app.locals.pretty = true;
//app.use(minify());
app.use(require('connect-history-api-fallback')());
// serve webpack bundle output
app.use(devMiddleware);
// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware);
if(config['dev'] !== true){
    app.use(express.static(__dirname + '/views/dist',{ maxAge: 86400000*7 }));
}

/* api hook */
var http = require('http').Server(app);
//require('./api/card')(app);
if (!module.parent) {
  http.listen(config.port);
  sys.log((config['appname']+' runnng port:' + config.port).green);
}

