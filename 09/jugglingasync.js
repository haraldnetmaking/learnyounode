var http = require('http');
var uris = process.argv.splice(2);

var storedContent = [];
var ended = 0;

function handleData(data, i) {
    if(storedContent[i] === undefined) {
        storedContent[i] = '';
    }
    storedContent[i] = storedContent[i] + data.toString();
}

function handleEnd(data) {
    ended++;
    if(ended >= uris.length) {
        printResult();
    }
}

function printResult() {
    for (var i = 0; i < uris.length; i++) {
        console.log(storedContent[i]);
    };
}

for (var i = 0; i < uris.length; i++) {
    (function(i){
        http.get(uris[i], function(response) {
            response.setEncoding('utf8');

            response.on('data', function(data){
                handleData(data, i);
            });

            response.on('end', handleEnd);
        });

    })(i);
};
