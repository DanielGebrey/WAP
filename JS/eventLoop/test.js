// setTimeout(()=>console.log('timeout'),1000);
// console.log('end');
// console.log(globalThis===global);
function add(num1,num2){
    return num1 + num2;
}
for(let i=0; i<100; i++){
    console.log(add(i,i));
}