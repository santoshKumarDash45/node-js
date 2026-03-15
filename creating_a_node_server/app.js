/** @format */

const http = require("http");

function reqListener(req, res) {
	console.log("res0", req, res);

	
}

http.createServer(reqListener);
