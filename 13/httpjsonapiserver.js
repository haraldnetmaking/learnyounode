var http = require('http');
var url = require('url');
var port = process.argv[2];

function onRequest(request, response) {
    if(request.method != 'GET')
        return;

    request.setEncoding('utf8');
    response.writeHead(200, { 'Content-Type': 'application/json' })

    var parsed = url.parse(request.url, true);
    var iso = parsed.query.iso;
    var date = new Date(iso);

    switch(parsed.pathname) {
        case '/api/parsetime':
            response.end( parsetime(date) );
        break;
        case '/api/unixtime':
            response.end( unixtime(date) );
        break;
    }
}

function parsetime(date) {
    return JSON.stringify({
        hour:date.getHours(),
        minute:date.getMinutes(),
        second:date.getSeconds()
    });
}
function unixtime(date) {
    return JSON.stringify({
        unixtime:date.getTime()
    });
}

http.createServer(onRequest).listen(port);
