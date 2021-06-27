const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello, I am Node.js");
    res.end();
  })
  .listen(8080, () => {
    console.log("server is listening on 8080");
  });
