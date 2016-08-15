var express  = require('express');
var mongoose = require('mongoose');
var router  = express.Router();
var Product = mongoose.model('Product');

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

router.param('product', function(req, res, next, id) {
  var query = Product.findById(id);

  query.exec(function (err, product){
    if (err) { return next(err); }
    if (!product) { return next(new Error('can\'t find product')); }

    req.product = product;
    return next();
  });
});

router.get('/api/products/:product', function(req, res) {
  res.json(req.product);
});

module.exports = router;
