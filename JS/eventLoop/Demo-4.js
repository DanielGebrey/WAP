
const fs = require('fs');
fs.readFile('hello.txt', ()=>console.log('readFile......'));
console.log('start');
fs.readFile('hello.txt',(err,data)=>console.log(data.toString()));
console.log('end');

const fs = require('fs');
fs.readFile('Hello.txt',()=>console.log('readFile....'));
setTimeout(()=>console.log('timeout'),0);