/** @format */

const http = require("http");

function reqListener(req, res) {
	console.log("res", req, res);


}

http.createServer(reqListener);
