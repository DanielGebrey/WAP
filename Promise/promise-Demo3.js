console.log('start');

// const myPromise=new Promise((a,b)=>{
//     const random = Math.random();
//     console.log(random);
//     if(random > 0.5){
//         resolve('number is greater than 0.5: ',num=>console.log(num));
//     }
//     else{
//         reject('Reject');
//     }
// });

// myPromise.then(console.log).catch(console.log).finally(()=>console.log("Inside finaly"));

console.log('end');




new Promise((resolve,reject)=>{
    const random = Math.random();
    console.log(random);
    if(random > 0.5){
        resolve('number is greater than 0.5: ',num=>console.log(num));
    }
    else{
        reject('Reject');
    }
}).then(console.log).catch(console.log).finally(()=>console.log("Inside finaly"));