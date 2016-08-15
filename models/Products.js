var mongoose = require('mongoose');

var ProductSlideShowSchema = new mongoose.Schema({ name: String });
var ProductSchema = new mongoose.Schema({
	slideShow: [ProductSlideShowSchema],
	title: String,
	description: String,
	floorPlan: String,
	newIn: Boolean
});

mongoose.model('ProductSlideShow', ProductSlideShowSchema);
mongoose.model('Product', ProductSchema);