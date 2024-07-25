const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    const location = req.url;
    if (location === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      let fileContent = fs.readFileSync("index.html", "utf8");
      res.write(fileContent);
    } else if (location === "/contact") {
      res.writeHead(200, { "Content-Type": "text/html" });
      let fileContent = fs.readFileSync("contact.html", "utf8");
      res.write(fileContent);
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      let fileContent = fs.readFileSync("404.html", "utf8");
      res.write(fileContent);
    }
    res.end();
  })
  .listen(8080);
