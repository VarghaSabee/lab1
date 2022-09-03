const http = require('http');

const PORT = 3030;

const requestListener = async function (req, res) {
    if (req.method == "GET") {
        // TODO
        res.setHeader('Content-Type', 'application/json');
        res.write("OK");
    }
    res.end();
}

const server = http.createServer(requestListener);
server.listen(PORT);
console.log(`Server listening on port ${PORT}`)