module.exports.settings =  {
	appname:'appname',
	dev:true,
	port: 5013,
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