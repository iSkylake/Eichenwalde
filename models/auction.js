var mongoose = require('mongoose');

var auctionSchema = new mongoose.Schema({
	name: String,
	description: String,
	bid: [Number],
	image: String
});

module.exports = mongoose.model("Auction", auctionSchema);