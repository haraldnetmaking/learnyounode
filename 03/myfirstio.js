var fs = require('fs');


var buf = fs.readFile(process.argv[2]);

var str = buf.toString();

var lines = str.split('\n').length - 1;

console.log(lines);