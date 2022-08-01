const http = require("http");

const host = 'localhost';
const port = 8080;

// handler
const requestListener = function (req, res) {
    res.writeHead(200);
    if (req.method === 'GET') {
        res.end(`ini get`);
    } else {
        res.end(`method: ${req.method}`);
    }
};

// server definition
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});