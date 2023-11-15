const person = require('./person');
console.log(person.getFullName());
person.firstname='John';
person.lastname='smith';
console.log(person.getFullName());
require('./cache.js');