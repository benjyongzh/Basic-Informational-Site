let http = require("http");
let url = require("url");
let fs = require("fs");

http
  .createServer((req, res) => {
    let q = url.parse(req.url, true);
    let filename = `.${q.pathname}`;
    if (filename === "./") {
      //index
      fs.readFile("./index.html", (err, data) => {
        if (err) {
          read404(res);
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        }
      });
    }
    fs.readFile(filename, (err, data) => {
      if (err) {
        read404(res);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
      }
      return res.end();
    });
  })
  .listen(8080);

function read404(res) {
  fs.readFile("./404.html", (err, data) => {
    res.writeHead(404, { "Content-Type": "text/html" });
    return res.end(data);
  });
}
