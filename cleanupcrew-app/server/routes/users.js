var express = require('express');
var router = express.Router();
var mongoUtil = require('../database/db.js');

mongoUtil.connectToServer(function(err){

});

//assume id is given in req
router.get('/user', function(req, res, next){
  // read req to get a user id
  var id_token = req.query['id_token'];
  // lookup the id in the database
  var db = mongoUtil.getDb();
  // var cursor = db.collection('cc_col').find({id_token:id_token});
  var result_cursor = db.collection('cc_col').findOne({id_token: id_token});
  result_cursor.then(function(result){
    res.send(result);
  })
})
// assume /user?idtoken=x&name=x&email=x
router.post('/user', function(req, res, next){
  // read req to get a username or password
  var id_token = req.query['id_token'];
  var name = req.query['name'];
  var email = req.query['email'];
  // create the user object in the database
  var user = {
    "id_token":id_token,
    "name":name,
    "email":email
  };

  var db = mongoUtil.getDb();

  // vvvv
  // send any data to the database, or just send a succuess or conformatoin
  var c = db.collection('cc_col').insertOne(user);
  console.log("successfully added user to database");
})

module.exports = router;
