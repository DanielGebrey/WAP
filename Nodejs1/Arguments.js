function findMax(){
//     console.log(arguments);
let max=0;
for(let i=0; i< arguments.length;i++){
    if(arguments[i]>max)
    max=arguments[i];
}
return max;
}
console.log(findMax(8,7,9,6,4,3,4));
console.log(findMax(8,7,90,6,4,3,4,5,7,9));
console.log(findMax(8,7,9,60));