var express = require('express');
var router = express.Router();
var mongoUtil = require('../database/db.js');
var mongodb = require('mongodb');


router.post('/api/events', function(req, res, next){
  var event_organizer = req.query['event_organizer'];
  var event_users = [];
  var public_id = req.query['public_id'];
  var event_start_time = req.query['event_start_time'];
  var event_end_time = req.query['event_end_time'];
  var lat = req.query['lat'];
  var long = req.query['long'];
  var radius = req.query['radius'];
  var event = {
    "event_organizer":event_organizer,
    "event_users": event_users,
    "public_id": public_id,
    "event_start_time": new Date(event_start_time),
    "event_end_time": new Date(event_end_time),
    "lat": lat,
    "long": long,
    "radius": radius
  };

  var db = mongoUtil.getDb();
  var c = db.collection('cc_event').insertOne(event);
  console.log("successfully added event to database");
  res.send('success');
})


module.exports = router;
