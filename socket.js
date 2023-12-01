
var socketio = require('socket.io')
function spinWebSocketserver(server){

    const io = new socketio.Server(server, {
        cors: {
            origin: "*",
        }
    });
    global.io = io;
    io.on('connection', function (socket) {
        socket.join(socket.request._query);
        console.log("Someone connected to the socket ...");
    });
}

module.exports = spinWebSocketserver;