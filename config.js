var path = require('path');

module.exports.settings =  {
	appname:'foo',
	dev:true,
	port: 5013,
	build: {
	    output: path.resolve(__dirname, 'views/dist'),
	    productionSourceMap: true
	},
	wx: {
		'appid':'wx50d746e9d0f0af1e'
	},
	mongo : {
		host:"localhost",
		port: 27017,
		dbname: "dbname",
		serveropt: {
			'auto_reconnect':true,
			 poolSize:5
		},
		dbopt : {
			w:-1
		}
	}
}