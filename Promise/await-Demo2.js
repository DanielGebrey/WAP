async function foo(){
    throw new Error('Whoops!!');
}
async function bar(){
try{
    await foo();
} catch(error){
console.log('inside catch block ',error.message);
}
finally{
    console.log('inside finally');
}
}
bar();