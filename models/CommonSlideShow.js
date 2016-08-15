var mongoose = require('mongoose');
var EventSlideShowSchema = new mongoose.Schema({ 
	name: String,
	url: String 
});

mongoose.model('EventSlideShow', EventSlideShowSchema);
