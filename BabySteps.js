// console.log(process.argv);
var sum = 0;
for (ii = 2; ii < process.argv.length; ii++) {
	sum += Number(process.argv[ii]);
}

console.log(sum);
