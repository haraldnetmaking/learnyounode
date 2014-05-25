var http = require('http');
var port = process.argv[2];

function onRequest(request, response) {
    request.setEncoding('utf8');
    if(request.method != 'POST')
        return;

    //var postData = '';
    request.on('data', function (chunk) {
        //postData += chunk.toUpperCase();
        response.write(chunk.toUpperCase());
    });

    request.on('end', function () {
        //response.end(postData);
        response.end(null);
    });
}

http.createServer(onRequest).listen(port);