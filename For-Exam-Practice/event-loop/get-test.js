const fs = require('fs');

setTimeout(()=>console.log('timeout....'),1);
fs.readFile('hello.txt',()=>console.log('readfile'));