const express = require("express");
const app = express();
const port = 3000;

//views
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact-me", (req, res) => {
  res.render("contact-me");
});

app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(port, function () {
  console.log(`app listening on port ${port}!`);
});
