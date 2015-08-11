var http = require("http");
var url = require("url");

var server = http.createServer(function(request, response){
	var result = '';
	var link = request.url;

	var urlObj = url.parse(link, true);
	
	if(urlObj.pathname == '/api/parsetime'){
		if(urlObj.query.iso){
			var date = new Date(urlObj.query.iso.toString());

			var hour = date.getHours();
			var min = date.getMinutes();
			var seconds = date.getSeconds();
			
			var output = {};
			output.hour = hour;
			output.minute = min;
			output.second = seconds;
			
			result = JSON.stringify(output);			
		}
	}
	else if(urlObj.pathname == '/api/unixtime') {
		var date = new Date(urlObj.query.iso.toString());
		
			var output = {};
			output.unixtime = date.getTime();
			
			result = JSON.stringify(output);		
	}
	else{
		response.end();
	}

	response.writeHead(200, { 'Content-Type': 'application/json'});
	response.end(result);
});

server.listen(process.argv[2]);