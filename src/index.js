const http = require('http')

const server = http.createServer((req, res) => {
    if ((req.method === "GET") && (req.url === "/")) {
        res.statusCode = 200;
        res.end("Hello, World!");
    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }
});

server.listen(3001, () => {
    console.log("Server is listening on port 3001");
});
