var express  = require('express');
var mongoose = require('mongoose');

var router   = express.Router();
var Event    = mongoose.model('Event');

router.get('/api/events', function(req, res, next) {
  Event.find(function(err, events){
    if(err){ return next(err); }

    res.json(events);
  });
});

router.post('/api/events', function(req, res, next) {
  var event = new Event(req.body);

  event.save(function(err, event){
    if(err){ return next(err); }

    res.json(event);
  });
});

module.exports = router;
