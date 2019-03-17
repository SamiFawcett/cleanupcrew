var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var uri = "mongodb+srv://admin:iFW9nXIr0a1zveYG@cleanupcrew-8by1p.mongodb.net/test?retryWrites=true";
var _db;

MongoClient.connect(uri, {useNewUrlParser: true}, function(err, client) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  _db = client.db('cc_db');
});

module.exports = {
  getDb: function(){
    return _db;
  }
};
