var http = require('http');
var bl = require('bl');

var result = ['','',''];
var count = 0;

var printResults = function(){
	for(var i = 0; i < 3; ++i) {
		console.log(result[i]);
	}
}

var actualGet = function(i){
	var request = http.get(process.argv[i], function(response){
		response.setEncoding("utf8");
		var eachresult = '';
		response.on("data", function(data){
			eachresult += data;
		});
		
		response.on("end", function(){
			result[i - 2] = eachresult;
			count += 1;
			
			if(count == 3){
				printResults();
			}	
		});
	});
}

for(var i = 2; i < 5; ++i) {
	actualGet(i);	
}