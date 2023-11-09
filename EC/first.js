// console.log(z);
// var z =10;
//console.log(z);

// let x=2;
// function foo(){
//     let y=2;
//     return function(z){
//         console.log(x+y+z);
//     }
// }
// const bar = foo();
// bar(3);

const res=(function (x,y){
     x= 5 ,y=6;
//console.log(x+y);
return x+y;
})();

console.dir(res);