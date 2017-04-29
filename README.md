# Friend Finder

This app is a survey of 10 questions that matches you with the best match friend based on response scores.

## Live Link 
 - https://github.com/chefjoannacodes/FriendFinder

## Description on how to use the app
Take the survey and get an instant match!!!

## Requirements
#### Instructions

- Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.
- Your htmlRoutes.js file should include two routes:
- A GET Route to /survey which should display the survey page.
- A default USE route that leads to home.html which displays the home page.
- Your apiRoutes.js file should contain two routes:
- A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
- A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
- You should save the data in your app as an array of objects. Each of these objects should roughly follow the format below.
- Determine the user's most compatible friend using the following as a guide:
- Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
- With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the  totalDifference.
Example:
User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
Total Difference: 2 + 1 + 2 = 5
Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
The closest match will be the user with the least amount of difference.
Once you've found the current user's most compatible friend, display the result as a modal pop-up.
The modal should display both the name and picture of the closest match.

## Technologies Used
#### 
- Javascript
- HTML/CSS
- Express
- Modals
- Node
- Jquery for Dom Manipulation
- AJAX for API GET requests

## Code Explaination

The meat of the application was taking in the user's scores and comparing them with the matches in my array. 

I used 2 for loops to go through all the scores and compare the differences. The loops were contained in a post request in the apiRoute.js file. 

-------------


```
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

```
