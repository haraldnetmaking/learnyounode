var http = require('http');

var uri = process.argv[2];

function callback(response) {
    response.setEncoding('utf8');


    response.on('data', append);

    response.on('end', function(data){
        append(data);
        console.log(stored.length);
        console.log(stored);
    });

    response.on('error', console.error);
}

var stored = '';
function append(collection) {
    if(collection) {
        stored += collection;
    }
}


http.get(uri, callback);

