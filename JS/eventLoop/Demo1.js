const fs = require('fs');
console.log('start');
fs.readFile('hello.txt',(err,data)=>console.log(data.toString()));
console.log('end');