console.log('start');

const obj =new Promise((resolve,reject)=>{
    resolve(10);
}).then(data=>data*10);

console.log(obj);

console.log('end');