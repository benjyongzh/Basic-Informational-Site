let http = require("http");
let url = require("url");
let fs = require("fs");

http
  .createServer((req, res) => {
    let q = url.parse(req.url, true);
    let filename = `.${q.pathname}`;
    fs.readFile(filename, (err, data) => {
      if (err) {
        // read404(res);
        // return res.end();
        fs.readFile("404.html", (error, data2) => {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.write(data2);
        });
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
      }
      return res.end();
    });
  })
  .listen(8080);

function read404(res) {
  fs.readFile("404.html", (err, data) => {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(data);
    //return res.end();
  });
}
