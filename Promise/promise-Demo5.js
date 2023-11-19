console.log('start');

const obj =new Promise((resolve,reject)=>{
    resolve(10);
}).then(data=>data*10).then(x=>x*10).then(y=>y+10).then(result=>console.log(result));

//console.log(obj);

console.log('end');