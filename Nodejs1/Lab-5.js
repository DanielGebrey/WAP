//Question number 1

function sum(arr){
    let sum =0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>20){
        sum+=arr[i];
    }
}
return sum; 
}
const num =[5,6,9,25,63,9];
console.log(sum(num));

//Question number 2

const getNewArray= function(arr){
    var newArr=[];
    for(let j=0;j<arr.length;j++){
        if(arr[j].length>=5 && arr[j].includes('a'))
        newArr.push(arr[j]);   
}
return newArr;
}
const test = ['black','yellow','amorela','red'];
console.log(getNewArray(test));

// Question number 3;

//const arrofarr = ['hi', [1,2,3], ['Hello','world']];
const arr1= ['hi'];
const arr2= [1,2,3];
const arr3 =['Hello','World'];
// const conc = arrofarr.reduce((accum,element,index,arr)=>[...accum]+''+[...element]);
// console.log(conc);

const conc1 = [...arr1,...arr2,...arr3];
console.log(conc1);
