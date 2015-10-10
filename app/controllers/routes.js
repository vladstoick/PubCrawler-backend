var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Route = mongoose.model('Route');

module.exports = function (app) {
  app.use('/routes', router);
};

router.get('/', function (req, res, next) {
  Route.find(function(err, routes){
    res.json(routes);
  })
});

router.get('/:id', function(req, res, next){
  Route.find(function(err, route){
    res.json(route);
  }) 
});

router.post('/create', function(req, res, next){
  if(req.query.title){
    var route = new Route({ title: req.query.title });
    route.save(function (err) {
      res.json({success: "true"});
    });
  } else {
    res.json({success: "false; not enough params"});
  }
});