var fs = require('fs');

var file = fs.readFile(process.argv[2], function(err, data) {
	var split = data.toString().split('\n');
	
	console.log(split.length - 1);
});