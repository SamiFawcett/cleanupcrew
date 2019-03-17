var express = require('express');
var router = express.Router();
var mongoUtil = require('../database/db.js');
var mongodb = require('mongodb');


//write event to db
router.post('/api/events', function(req, res, next){
  var event_organizer_id = req.query['event_organizer_id'];
  var event_users = [];
  var public_id = req.query['public_id'];
  var event_start_time = req.query['event_start_time'];
  var event_end_time = req.query['event_end_time'];
  var lat = req.query['lat'];
  var long = req.query['long'];
  var radius = req.query['radius'];
  var event = {
    "event_organizer": event_organizer_id,
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

//get all events
router.get('/api/all_events', function(req, res, next){
  var event_arr = [];
  var db = mongoUtil.getDb();
  var result_cursor = db.collection('cc_event').find();
  result_cursor.forEach(function(doc){
     event_arr.push(doc);
  }).then(function(){
    var return_obj = {
      "event_arr" : event_arr
    }
    res.send(return_obj);
  });
})

//read event from db by @query-param public_id
router.get('/api/events', function(req, res, next){
  var public_id = req.query['public_id'];
  var db = mongoUtil.getDb();
  var result_cursor = db.collection('cc_event').findOne({public_id : public_id});
  result_cursor.then(function(result){
    res.send(result);
  })
})

//add user to event
router.post('/api/event_add_user', function(req, res, next){
  var public_id = req.query['public_id'];
  var user_id = req.query['user_id'];
  var db = mongoUtil.getDb();
  var result_cursor = db.collection('cc_event').updateOne({public_id : public_id}, {$push: {'event_users':  user_id } }, false);
  res.send('success');

})

//delete user from event
//@param public_id, user_id
router.delete('/api/event_delete_user', function(req, res, next){
  var public_id = req.query['public_id'];
  var user_id = req.query['user_id'];
  var event;
  var db = mongoUtil.getDb();
  var result_cursor = db.collection('cc_event').findOne({public_id : public_id});
  result_cursor.then(function(result){
    event = result;
    for(var i = 0; i < event.length; i++){
      if(event['event_users'] == user_id ){
        event.spice(i, 1);
      }
    }
      console.log(event['event_users']);
    res.send('success');
  })
})

router.delete('/api/event', function(req, res, next){

})


module.exports = router;
