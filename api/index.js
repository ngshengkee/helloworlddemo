var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Product = mongoose.model('Product');
// var Event = mongoose.model('Event');
// var Comment = mongoose.model('Comment');

router.get('/api/posts', function(req, res, next) {
  Post.find(function(err, posts){
    if(err){ return next(err); }

    res.json(posts);
  });
});

router.post('/api/posts', function(req, res, next) {
  var post = new Post(req.body);

  post.save(function(err, post){
    if(err){ return next(err); }

    res.json(post);
  });
});

router.get('/api/posts/:post', function(req, res) {
  res.json(req.post);
});

router.param('post', function(req, res, next, id) {
  var query = Post.findById(id);

  query.exec(function (err, post){
    if (err) { return next(err); }
    if (!post) { return next(new Error('can\'t find post')); }

    req.post = post;
    return next();
  });
});





// router.get('/api/events', function(req, res, next) {
//   Event.find(function(err, events){
//     if(err){ return next(err); }

//     res.json(events);
//   });
// });

// router.post('/api/events', function(req, res, next) {
//   var event = new Event(req.body);

//   event.save(function(err, event){
//     if(err){ return next(err); }

//     res.json(event);
//   });
// });



















router.get('/api/products', function(req, res, next) {
  Product.find(function(err, products){
    if(err){ return next(err); }

    res.json(products);
  });
});

router.post('/api/products', function(req, res, next) {
  var product = new Product(req.body);

  product.save(function(err, post){
    if(err){ return next(err); }

    res.json(product);
  });
});

router.get('/api/products/:product', function(req, res) {
  res.json(req.product);
});

router.param('product', function(req, res, next, id) {
  var query = Product.findById(id);

  query.exec(function (err, product){
    if (err) { return next(err); }
    if (!product) { return next(new Error('can\'t find product')); }

    req.product = product;
    return next();
  });
});



module.exports = router;
