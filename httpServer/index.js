const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    // console.log(req.url)
    if (req.url == "/") {
        res.end("Hello from the other Side");
    } else if (req.url == "/users") {
        console.log(__dirname, __filename);
        fs.readFile(`../userApi/userApi.json`, "utf-8", (err, data) => {
            console.log(`Received Data ${data}`);
            const parse_data = JSON.parse(data);
            res.writeHead(200, { "content-type": "application/json" })
            res.end(`Hello, this is USERS,
            ${parse_data[0].name}`);
        });
    } else if (req.url == "/about") {
        res.end("Hello, this is ABOUT");
    } else if (req.url == "/contact") {
        res.end("Hello this is contact");
    } else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>404. error page. PAGE DOES'NT EXIST</h1>");
    }
});

server.listen(3000, "127.0.0.1", () => {
    console.log("Listening to the port no 3000");
});