const http = require("http");
const fs = require("fs");

function copyText(path1, path2) {
  const text = fs.readFileSync(path1, "utf8");
  fs.writeFileSync(path2, text);
}

function moveText(path1, path2) {
  const text = fs.readFileSync(path1, "utf8");
  fs.writeFileSync(path1, "");
  fs.writeFileSync(path2, text);
}

const server = http.createServer(function (req, res) {
  const location = req.url;
  if (location == "/copy") {
    copyText("file1.txt", "file2.txt");
    res.write("Text copied");
  } else if (location == "/move") {
    moveText("file1.txt", "file2.txt");
    res.write("Text moved");
  } else {
    res.write("Unknown command");
  }
  res.end();
});

server.listen(8080);
