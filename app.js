/**
 * Module dependencies.
 */
var express = require('express'),
	config = require('./config').settings,
	color = require('colors'),
	util = require('./lib/util'),
    sys = require('sys');


//var minify = require('express-minify');
var app = module.exports = express();
app.enable('trust proxy');
//app.locals.pretty = true;
//app.use(minify());
app.use(express.static(__dirname + '/views/res',{ maxAge: 86400000*7 }));
app.set('views', __dirname+'/views');

/* views */
app.get('/',function(req,resp){ 
	resp.render('index.jade');
});

var http = require('http').Server(app);
//require('./api/card')(app);
if (!module.parent) {
  http.listen(settings.port);
  sys.log(settings['appname']+' runnng port:' + settings.port);
}

