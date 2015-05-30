// server.js
var http = require("http");

function greet(req, res) {

    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello World");
    res.end();
}

// create sever starts the server
var server = http.createServer(greet);

// I'm starting the sever on port 3000
server.listen(3000);