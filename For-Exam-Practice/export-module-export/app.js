// console.log(__dirname);
// async function foo(){
// return 'hi';
// }
// //console.log(foo());
// foo();

// const person = require('./patter');

// person.getName();

// person.name = 'Jack';

// person.getName();

console.log('start');

new Promise((resolve, reject) => {

    console.log('1');

    resolve('2');

}).then(console.log);

console.log('end');