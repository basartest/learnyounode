var fs = require("fs");

var extension = "." + process.argv[3];

var callback = function(err, list) {
	if(!err) {

		var filteredList = list.filter(filterExtension)

		for(var i = 0; i < filteredList.length; i++) {
			console.log(filteredList[i]);
		}

	}

};

fs.readdir(process.argv[2], callback);

var filterExtension = function(element) {
	return (element.slice((element.length - extension.length), element.length) === extension)

}