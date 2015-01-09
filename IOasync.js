var fs = require("fs");
var length = fs.readFile(process.argv[2], "utf-8", function(error, data) {
	console.log(data.split('\n').length - 1);
});
