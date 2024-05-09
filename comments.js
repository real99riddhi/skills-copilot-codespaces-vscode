// create web server
// run node comment.js
// open browser and type http://localhost:3000
// see the output

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.createReadStream(__dirname + '/index.htm').pipe(res);
}).listen(3000, function() {
    console.log('server is running on port 3000');

});