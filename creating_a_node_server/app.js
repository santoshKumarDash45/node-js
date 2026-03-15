/** @format */

const http = require("http");

function rqListener(req, res) {
  console.log(req.url);

  res.write("Hello Node Server");
  res.end();
}

const server = http.createServer(rqListener);

server.listen(3000);
