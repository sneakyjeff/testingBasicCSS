var fs = require('fs');

var express = require("express");
var app     = express();
var path    = require("path");


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/myprofile.html'));
  //__dirname : It will resolve to your project folder.
});

function countArray(array){
	return 'this is the length: ' + array.length
}

function printHello(){
	return 'hello world';
}


var functionexpression = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}

module.exports = {
	countArray: countArray, 
	printHello: printHello,
	functionexpression: functionexpression
};



