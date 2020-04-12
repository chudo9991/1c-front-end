// чат-сервер через WebSocket

let wss = require("ws").Server; // после установки WS!
let server = new wss({port:591});
let clients = new Set();
server.on("connection", function(socket){ 
    clients.add(socket);
    socket.on("message", function(message){ 
        for(let interlocutor of clients) {
            interlocutor.send(message);
        }
    });
    socket.on("close", function(){
        clients.delete(socket);
    });
});
