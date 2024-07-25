const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  const text = "Manoj is also serious.";
  // fs.appendFileSync('seezan.txt',text);
  // fs.renameSync('seezan.txt','manoj.txt')
  fs.unlinkSync("manoj.txt");
  res.end();
});

server.listen(8080);
