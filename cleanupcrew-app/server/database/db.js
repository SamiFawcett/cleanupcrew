var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var uri = "mongodb+srv://admin:yPMplkNDjHynJcZr@cc-8by1p.mongodb.net/test?retryWrites=true";
var _db;

module.exports = {
  connectToServer: function(callback){
    MongoClient.connect(uri, {useNewUrlParser: true}, function(err, client) {
      assert.equal(null, err);
      console.log("Connected correctly to server");
      _db = client.db('cc_db');
      return callback( err );
    });
  },
  getDb: function(){
    return _db;
  }
};
