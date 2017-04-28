var friendData = require('../data/friends.js');

module.exports = function(app) {
	app.get('/api/friends', function(req,res){
		res.json(friendData);
		console.log(friendData);
	})

	app.post('/api/friends', function(req,res){
		friendData.push(req.body);
		console.log("updated friends date", friendData);
		alert("Your profile has been successfully added!")
	})
}