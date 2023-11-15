var a,b,c,d;
a=[1,2,3];
b='abc';
c=['c','d'];

d=a.concat(b,c);
e=[...a,b,...c];

// console.log(d);
// console.log(e);

var str = 'Hello';
let str1 = 'World';
console.log([...str,...str1]);
