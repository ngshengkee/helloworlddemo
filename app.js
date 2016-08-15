var express = require('express');
var path    = require('path');
var favicon = require('serve-favicon');
var logger  = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');

var mongoose = require('mongoose');
// require('./models/Home');
require('./models/Posts');
require('./models/Products');
require('./models/Events');
require('./models/Comments');

mongoose.connect('mongodb://localhost/comfyseat');

var routes      = require('./api/index');
// var HomeAPI     = require('./api/home');
var ProductsAPI = require('./api/products');
var EventsAPI   = require('./api/events');

// var users = require('./routes/users');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// api
app.use('/', routes);
// app.use('/', HomeAPI);
app.use('/', ProductsAPI);
app.use('/', EventsAPI);

// app.use('/users', users);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// // app.use('', express.static(__dirname + '/javascripts'));
// // app.use('/public', express.static(__dirname + '/public'));
// // app.use('/views', express.static(__dirname + '/views'));
// app.use(function(req, res, next) {
// 	if(req.url.substr(-1) == '/' && req.url.length > 1)
// 		res.redirect(301, req.url.slice(0, -1));
// 	else
//        next();
// });

// // app.all('/*', function(req, res, next) {
// //     // Just send the index.html for other files to support HTML5Mode
// //     // console.log(__dirname);
// //     res.sendFile('index.html', { root: __dirname });
// //     // res.sendFile(path.join(__dirname + '/index.html'));
// // });

app.listen(3000); //the port you want to use