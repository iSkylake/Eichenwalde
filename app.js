var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	app = express();

var Auction = require('./models/auction.js');

mongoose.connect("mongodb://localhost/eichenwalde");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}));

var fakeData = require('./fakeData');
fakeData();
ObjectId = require('mongodb').ObjectID;

app.get('/', function(req, res){
	Auction.find({}, function(err, auctions){
		if(err){
			console.log(err);
		} else{
			// res.send(auctionData);
			res.render("index", {auctions:auctions});
		}
	});
	// res.render("auction");
});

app.get('/:id', function(req, res){
	Auction.findById(req.params.id, function(err, auction){
		if(err){
			console.log(err);
		} else{
			res.render('auction', {auction:auction});
		}
	});
});

app.post('/:id/bid', function(req, res){
	Auction.findById(req.params.id, function(err, auction){
		if(err){
			console.log(err);
		} else{
			if(req.body.bid > auction.bid[auction.bid.length-1]){
				Auction.findById(req.params.id, function(err, auction){
					auction.bid.push(req.body.bid);
					auction.save();
					console.log(auction.bid);
				});
				res.redirect('/'+auction._id);
			}
		}
	});	
});

app.listen(3000, function(){
	console.log("Server Started");
});