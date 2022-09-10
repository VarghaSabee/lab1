import http from "http";
import { Greetings } from "./greetings"

const PORT = 3030;

const requestListener = async function (req, res) {
    if (req.method === "GET") {
        // TODO
        res.setHeader('Content-Type', 'application/json');
        const g = new Greetings("John")

        console.log(g)
        res.write(g.sayHello2());
        res.end();
    } else {
        res.statusCode = 405;
        res.end();
    }
}

const server = http.createServer(requestListener);
server.listen(PORT);
console.log(`Server listening on port ${PORT}`)