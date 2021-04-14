const path = require("path");
const express = require("express");
const fs = require('fs')
const index = fs.readFileSync("./public/index.html");

const app = express();
const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, "../public")

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  res.render("index", {
    title: 'Index'
  });
  //res.send(`${index}`) /// --> static files
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: 'about'
  });
});


app.listen(port, () => {
  console.log("Server is up on port " + port);
});