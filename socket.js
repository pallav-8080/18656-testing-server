var socketio = require('socket.io')
var data = require('./liveFeed.js')

function spinWebSocketserver(server){

    const io = new socketio.Server(server, {
        cors: {
            origin: "*",
        }
    });
    global.io = io;
    io.on('connection', function (socket) {
        console.log("Someone connected to the socket ...");
        socket.emit("hello", "world");
        console.log(data.length);
        let i=0;
        let feed = setInterval(() => {
            socket.emit("liveMarketData", data[i]);
            if(i<data.length-1)
                i+=1;
        }, 500);
        
    });
    
}

module.exports = spinWebSocketserver;