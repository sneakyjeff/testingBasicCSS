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



