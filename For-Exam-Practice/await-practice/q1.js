// console.log('start')

// async function foo(){
//     console.log('1');
//     const result = await bar();
//     console.log(result);
//     console.log('2');
// }

// foo();

// console.log('end');

// async function bar(){
//     console.log('3')
//     return 'bar'
// }
//  function foo(){
// console.log(this === globalThis);
// }

const fs = require("fs");
const readableStream = fs.createReadStream('hello.txt');
readableStream.close();
//fs.readFile('hello.txt',()=>console.log('Read file'))
readableStream.on("close", () => {
console.log("this is from readableStream close event callback");
});
setImmediate(() => console.log("this is setImmediate 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
process.nextTick(() => console.log("this is process.nextTick 1"));
