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


app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
});
