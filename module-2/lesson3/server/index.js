// Сервер через Express + CORS
let express = require ("express");
let cors = require("cors"); // после установки CORS!
let app = express();

app.use(cors()); // после установки CORS!

app.get("/", function (request, response) {
    response.send("Hello, Node.js!");
});

app.listen(591);
