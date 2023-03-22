// let fs = require("fs");

const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// let page404;
// fs.readFile("./404.html", (err, data) => {
//   page404 = data;
// });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "/contact-me.html"));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(404).sendFile(path.join(__dirname, "/404.html"));
});

/* http
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
  .listen(8080); */

app.listen(port, function () {
  console.log(`app listening on port ${port}!`);
});
