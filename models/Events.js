var mongoose = require('mongoose');
// var CommonSlideShowSchema = require('./CommonSlideShow');

var EventScheme = new mongoose.Schema({
	day   : String,
	month : String,
	year  : Number,
	title : String,
	description : String
});

mongoose.model('Event', EventScheme);
