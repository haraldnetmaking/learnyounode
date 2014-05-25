var mymodule = require('./mymodule.js');

var folder = process.argv[2];
var ext = process.argv[3];

mymodule(folder, ext, function(err, data) {
    if(err) {
        console.log(err);
        return
    }
    console.log(data.join('\n'));
    /*
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
    };
    */
});
