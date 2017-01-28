Auction = require('./models/auction.js');

var auctionData = {
	name: "Oculus Rift",
	description: "Fusce vehicula placerat justo, ac ultrices ante posuere at. Donec sollicitudin eu elit vitae euismod. Nam eget eros molestie, ultricies dui eu, congue diam. Fusce pharetra condimentum nisl, sit amet volutpat nisi pulvinar sed. Integer vulputate placerat odio ac tempor. Mauris nec viverra libero. Proin at hendrerit ligula. Pellentesque facilisis eu massa eget hendrerit. Aenean massa quam, elementum eget cursus non, tempor a lorem. In posuere libero orci, ac laoreet lacus vestibulum eget. Sed commodo ullamcorper maximus.",
	image: "https://images-na.ssl-images-amazon.com/images/I/61ahfXnBa0L._SL1300_.jpg",
	bid: [100]
}

function fakeData(){
	Auction.remove({}, function(err){
		if(err){
			console.log(err);
		} else{
			console.log("Auction Deleted");
			Auction.create(auctionData, function(err, data){
				if(err){
					console.log(err);
				} else{
					console.log("Auction Created");
				}
			});
		}
	});
}

module.exports = fakeData;