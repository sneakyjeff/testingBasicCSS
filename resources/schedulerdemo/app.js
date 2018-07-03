var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.sendFile('this is the home index page');
})