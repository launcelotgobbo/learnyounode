var fs = require('fs');
// console.log(process.argv[2]);
var buffer = fs.readFileSync(process.argv[2]);
console.log(buffer.toString().split('\n').length - 1);
