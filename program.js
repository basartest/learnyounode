
var total = 0;
var length = process.argv.length;

for(var i = 2; i < length; i++) {

	total += Number(process.argv[i]);

}

console.log(total);


