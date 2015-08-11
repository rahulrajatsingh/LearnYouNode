var http = require("http");
var fs = require("fs");

var server = http.createServer(function(requst, response){
	
	var fileStram = fs.createReadStream(process.argv[3]);
	
	fileStram.pipe(response);
});

server.listen(process.argv[2]);