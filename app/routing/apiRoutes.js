var friendData = require('../data/friends.js');


module.exports = function(app) {
	app.get('/api/friends', function(req,res){
		res.json(friendData);
		console.log(friendData);
	})

	app.post('/api/friends', function(req,res){

		var tempTotal = 0;
		var bestMatch = 50;
		var bestImg = "";
		var bestMatchName = "";


		
		
		for (var i = 0; i < friendData.length; i++) {
			
			for (var j = 0; j < friendData[i].scores.length; j++) {

				
				var userScores = req.body['scores[]'][j];
				
				var friendScores = friendData[i].scores[j];
				
				if (userScores > friendScores){
					tempTotal += (userScores - friendScores);
					


				}else {
					
					tempTotal += (friendScores - userScores);
				}


			}

			if (tempTotal < bestMatch){
				bestMatch = tempTotal;
				bestImg = friendData[i].photo;
				bestMatchName = friendData[i].name;
			}
			tempTotal = 0;


			
			}

			var matchResult = { 
				name: bestMatchName,
				photo: bestImg
			}

		friendData.push(req.body);
		
		res.json(matchResult);
		
		
		
	})
}