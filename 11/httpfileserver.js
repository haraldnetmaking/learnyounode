var http = require('http');
var fs = require('fs');
var port = Number(process.argv[2]);
var dir = process.argv[3];

function onRequest(request, response) {
    request.setEncoding('utf8');
    var stream = fs.createReadStream(dir);

    stream.on('open', function() {
        stream.pipe(response);
    });
}

http.createServer(onRequest).listen(port);
