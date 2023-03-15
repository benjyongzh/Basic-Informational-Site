let http = require("http");
let url = require("url");
let fs = require("fs");

let page404;
fs.readFile("./404.html", (err, data) => {
  page404 = data;
});

http
  .createServer((req, res) => {
    let q = url.parse(req.url, true);
    let filename = `.${q.pathname}`;
    if (filename === "./") {
      fs.readFile("./index.html", (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.write(page404);
          return res.end();
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        }
      });
    } else {
      fs.readFile(`${filename}.html`, (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.write(page404);
          return res.end();
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        }
      });
    }
  })
  .listen(8080);
