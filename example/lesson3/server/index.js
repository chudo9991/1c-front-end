// // Сервер через Express + CORS
// let express = require ("express");
// let cors = require("cors"); // после установки CORS!
// let app = express();

// app.use(cors()); // после установки CORS!

// app.get("/", function (request, response) {
//     response.send("Hello, Node.js!");
// });

// app.listen(591);

// сервер через WebSocket

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