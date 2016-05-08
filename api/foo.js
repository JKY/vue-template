var util = require('../lib/util'),
    urlencode = require('urlencode'),
    settings = require('../settings').settings,
    urlstate = require('../lib/state').urlstate,
    mongo = require('../lib/db').mongo,
    ObjectID = require('mongodb').ObjectID,
    request = require('request'),
    moment = require('moment'),
    HTTP = require('../lib/proxy').HTTP,
    sys = require('sys');

var __DB_COLLECTION = 'log';

var __DB = {
  add: function(openid,data,callback){
      mongo.do(function(err,db){
          if(err){
              callback(err,null);
          }else{
            var col = db.collection(__DB_COLLECTION);
            col.update({'openid':openid},{'$set':data},{'upsert':true},callback);
          }
      })
  },

  get: function(q,n,callback){
      mongo.do(function(err,db){
          if(err){
              callback(err,null);
          }else{
              var col = db.collection(__DB_COLLECTION);
              col.find(q).sort({'timestamp':-1}).limit(n).toArray(callback);
          }
       })
  }
};


/* api endpoits defination */
var endpoints = exports.endpoints = {
    /* http get requests here */
    get:{
       foo: function(req,resp){
          var q = req['query'];
          util.out.json(resp,200,{'err':null});
        }
    },
    /* http post request hook */
    post: {
        foo: function(req,resp){
            util.parse_form(req,resp,function(fields,files){
                util.out.json(resp,200,{'err':null});
            });
        }
    }
}

/** hook **/
module.exports = function(app){
   for(var method in endpoints){
     util.bind("/api", endpoints[method], app[method], app, null);
   }
}