var fs = require("fs");

fs.readFile(process.argv[2], 'utf8', function (err, data) {
	
	if(!err) {
		var lines = data.toString().split('\n');
		var numberOfLines = lines.length - 1;
		console.log(numberOfLines);

	}

});



