var net = require('net');

var connection = process.argv[2];

var server = net.createServer(function(socket) {
    var d = new Date();

    socket.write(
        d.getFullYear() + '-' +
        addZero(d.getMonth() + 1) + '-' +
        addZero(d.getDate()) + ' ' +
        addZero(d.getHours()) + ':' +
        addZero(d.getMinutes()) + '\n'
    );

    socket.end();

});

function addZero(digit) {
  return (digit > 9 ? '' : '0') + digit;
}

server.listen(connection);