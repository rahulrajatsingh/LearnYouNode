var http = require('http');

var result = '';

var request = http.get(process.argv[2], function(response){
	response.setEncoding('utf8');
	response.on("data", function(data) {
		result += data;
	});
	response.on("end", function(data) {		
		console.log(result.length);
		console.log(result);
	});
});

request.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});
