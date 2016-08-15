var mongoose = require('mongoose');

var HomeSchema = new mongoose.Schema({
	title: String,
	description: String,
	url: String,
	image: String
});

mongoose.model('Home', HomeSchema);
