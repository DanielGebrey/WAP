console.log('start');
const myPromise = new Promise((resolve,reject)=>{
    resolve("what");
   // setTimeout(()=>resolve(1),0);
});
myPromise.then(x=>console.log("x")).finally(console.log("Inside finally"));
//console.log(myPromise);
console.log('end');
