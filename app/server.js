var bodyParser = require(‘body-parser’);
var express = require(‘express’);


var app = express();
var PORT = process.env.PORT || 8080;

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)

 
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

app.listen(PORT, function(){
	console.log(“App listening on PORT: “ + POST);
});


 // $("#toto").click(function() {
 //        $("#toto").attr("value", totoVal);
 //         //change player's score
 //        total += totoVal
 //        checkWin();
 //        $("#realScore").html(total);
 //        console.log("This is toto's total", total);
       
    // });
 var total = 0; //totals all points. higher points, more free spirit and extroverted
 var q1Val = 0;

 $("#submit").click(function() {
        $("#question1").attr("value", q1Val);
         //change player's score
        total += q1Val
        totalPoints();
        // $("#addTotal").html(total);
        console.log("This is the updated total", total);
       
    });


