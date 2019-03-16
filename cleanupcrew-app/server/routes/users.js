var express = require('express');
var router = express.Router();

router.get('/user', function(req, res, next){
  // read req to get a user id

  // lookup the id in the database

  // vvvv
  res.send('lodddl'); // send any data from the database
})

router.post('/userfff', function(req, res, next){
  // read req to get a username or password

  // create the user object in the database

  // vvvv
  res.send('lol'); // send any data from the database, or just send a succuess or conformatoin
})

module.exports = router;
