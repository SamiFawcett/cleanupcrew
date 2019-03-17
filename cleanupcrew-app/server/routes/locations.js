var express = require('express');
var router = express.Router();
var mongoUtil = require('../database/db.js');

mongoUtil.connectToServer(function(err){

});

router.post('/loc', function(req, res, next){
  var lat = req.query['lat'];
  var long = req.query['long'];
  var event_id = req.query['event_id']
  var user_id = req.query['user_id'];
  var time_stamp = req.query['time_stamp'];
  var loc = {
    "lat":lat,
    "long":long,
    "event_id":event_id,
    "user_id":user_id,
    "time_stamp":time_stamp
  };
  var db = mongUtil.getDb();
  var c = db.collection('cc_loc').insertOne(loc);
  console.log("successfully added location to database");

})

/*

//get all locations
router.get('/loc', function(req, res, next){
  var loc_arr = {};
  var iter = 0;
  db.collection('cc_loc').find().forEach((doc) => {
    loc_arr[iter] = doc;
  })
  res.send(loc_arr);
});

*/
