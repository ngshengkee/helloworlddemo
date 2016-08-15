var mongoose = require('mongoose');


var AwardScheme = new mongoose.Schema({
	day   : Number,
	month : String,
	year  : Number,
	title : String,
	description : String
});

// var ProductSlideShowSchema = new mongoose.Schema({ name: String });

// var ProductSchema = new mongoose.Schema({
// 	slideShow: [ProductSlideShowSchema],
// 	title: String,
// 	description: String,
// 	floorPlan: String,
// 	newIn: Boolean
// 	// title: String,
// 	// link: String,
// 	// upvotes: {type: Number, default: 0},
// 	// comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
// });

mongoose.model('Award', AwardScheme);
