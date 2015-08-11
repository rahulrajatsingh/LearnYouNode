var fs = require('fs');
var path = require('path');

module.exports = function(dir, extension, callback){
	var buf = fs.readdir(dir, function(err, files){
		if(err){
			return callback(err);
		}
		
		var result = [];
		
		for(var i = 0; i < files.length; ++i){
			if(path.extname(files[i]) == ('.' + extension)){
				result.push(files[i]);
			}
		}
		
		return callback(err, result);		
	});
}
