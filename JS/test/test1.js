// const http = require('http');
// const server = http.createServer();
// server.on('request', function(req, res) {
// res.writeHead(200, {'Content-Type': 'text/plain'});
// res.write('Hello World!');
// res.end();
// });
// server.listen(3000);

const http = require('http');
http.createServer(function (req, res) {
res.writeHead(200, { 'ContentType': 'application/json' });
const person = {
firstname: 'Josh',
lastname: 'Edward'
};
res.end(JSON.stringify(person));
}).listen(3000, '127.0.0.1');