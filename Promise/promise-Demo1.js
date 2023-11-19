console.log('start');
const myPromise = new Promise((resolve,reject)=>{
    console.log('Inside promise.... 1');
    //reject('whoops!!');
    resolve(1);
    console.log('Inside promise .... 2')
});
myPromise.then(x=>console.log(`resolve ${x}`)).catch(y=>console.log(`rejected...${y}`));
console.log('end');

