var mongoose = require('mongoose');

var HomeSlideShow = new mongoose.Schema({
	slideshow: []
});

mongoose.model('HomeSlideShow', HomeSlideShowSchema);
