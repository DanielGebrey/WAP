const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    fs.createReadStream('image.jpg').pipe(res);
}).listen(3000);

/*/this code makes the image to be downloaded.
http.createServer((req, res) => {
    fs.readFile(path.join(__dirname, 'image.jpg'), 'utf8', (error, data) => {
        if(error) console.log("Error is detected!");
        res.end(data);
    });
}).listen(3000);
//*/

/*/this code makes the image to be downloaded.
http.createServer((req, res) => {
    const file = fs.readFileSync('image.jpg', 'utf-8');
    res.end(file);
}).listen(3000);
//*/

/*
http.createServer(function(req, res){
    res.end("Image will be here shortly");
}).listen(3000);
*/

/*
const server = http.createServer();
server.on('request', (req, res) =>{
    res.end("Image will be here");
});
server.listen(3000, () => console.log('listening on 3000'));
*/