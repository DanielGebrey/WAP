console.log('start');
new Promise((resolve,reject)=>resolve('Hello')).then(()=>console.log('promise....'));
process.nextTick(()=>console.log('next tick'));
console.log('end');