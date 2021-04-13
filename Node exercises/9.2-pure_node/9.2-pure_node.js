const fs = require("fs");
const url = require("url");
const http = require("http");

const index = fs.readFileSync("./public/index.html");
const json = fs.readFileSync("./public/some.json");

const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === "/") {
    res.writeHead(200);
    res.end("<h1>ariel</h1>");
  } else if (parsedUrl.pathname === "/json") {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(json);
  } else if (parsedUrl.pathname === "/html") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(index);
  } else if (parsedUrl.pathname === "/index.css") {
    fs.readFile("./public/index.css", (err, cssFile) => {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.write(cssFile);
      res.end();
    });

  }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
