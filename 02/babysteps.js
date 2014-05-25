var args = process.argv.splice(2);

var result = 0;
for (var i = 0; i < args.length; i++) {
    result += Number(args[i]);
};
console.log(result);