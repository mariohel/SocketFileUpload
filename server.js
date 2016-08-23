var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var ss = require('socket.io-stream');
var path = require('path');
var fs = require('fs');

app.listen(8080);
console.log("Server running on port 8080");

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200);
    res.end(data);
  });
}

io.sockets.on('connection', function(socket) {
	console.log("Server connected to socket");
	  ss(socket).on('file', function(stream, data) {
		 var filename = path.basename(data.name);
		 console.log("uploading file..");
		 console.log( data);
		 stream.pipe(fs.createWriteStream("uploads/"+filename));
	  });
	});