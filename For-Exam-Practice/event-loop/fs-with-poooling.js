const fs = require('fs');

new Promise(resolve=>resolve(1).then(()=>console.log('promise')))
fs.readFile('hello.txt',()=>console.log('readFile...'))
setTimeout(()=>console.log('timeout...'))
setImmediate(()=>console.log('Immediate'));
process.nextTick(()=>console.log('next tick'))