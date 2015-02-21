var fs = require("fs");

var buffer = fs.readFileSync(process.argv[2].toString());

var lines = buffer.toString().split("/n");

var numberOfLines = lines.length - 1;

console.log(numberOfLines);