console.log('start');
setTimeout(()=>console.log('timeout'));
process.nextTick(()=>console.log('next tick'));
console.log('end');