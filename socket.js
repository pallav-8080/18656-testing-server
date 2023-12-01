
var socketio = require('socket.io')
function spinWebSocketserver(){

    const io = new socketio.Server(8000);
    global.io = io;
    io.on('connection', function (socket) {
        socket.join(socket.request._query);
        console.log("Someone connected to the socket ...");
    });
}

module.exports = spinWebSocketserver;