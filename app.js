var awesome = require('./server');
var http = require('http');

// function todoFunctionHere(){
	
// }


http.createServer(awesome.printHello()).listen(8000);