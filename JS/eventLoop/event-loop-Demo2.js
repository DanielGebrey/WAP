console.log('start');
setTimeout(()=>console.log('timeout 1'),0);
setTimeout(()=>{
    process.nextTick(()=>console.log('next tick 3'));
},0);
setTimeout(()=>console.log('timeout 3'),0);
new Promise((resolve,reject)=>resolve('Hello')).then(()=>console.log('promise...1'));
new Promise((resolve,reject)=>resolve('Hello')).then(()=>console.log('promise...2'));
process.nextTick(()=>console.log('next tick'));
console.log('end');