var bodyParser = require('body-parser')
var express = require('express')
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;
 
 app.use(bodyParser.urlencoded({ extended: false}))
// parse application/json 
app.use(bodyParser.json())
 

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);
 // $("#toto").click(function() {
 //        $("#toto").attr("value", totoVal);
 //         //change player's score
 //        total += totoVal
 //        checkWin();
 //        $("#realScore").html(total);
 //        console.log("This is toto's total", total);
       
    // });
 // var total = 0; //totals all points. higher points, more free spirit and extroverted
 // var q1Val = 0;

 // $("#submit").click(function() {
 //        $("#question1").attr("value", q1Val);
 //         //change player's score
 //        total += q1Val
 //        totalPoints();
 //        // $("#addTotal").html(total);
 //        console.log("This is the updated total", total);
       
 //    });

app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
});
