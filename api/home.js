var express  = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Home = mongoose.model('Home');

router.get('/api/feature', function(req, res, next) {
  Home.find(function(err, feature){
    if(err){ return next(err); }

    res.json(feature);
  });
});

router.post('/api/feature', function(req, res, next) {
  var home = new Home(req.body);

  home.save(function(err, home){
    if(err){ return next(err); }

    res.json(home);
  });
});

module.exports = router;
