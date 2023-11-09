const chemicals = [
   'hyderogn',
    'oxygin',
    'carbon_dioxyde',
    'helum'
];
const f1= chemicals.filter((x,y,z)=>{
return x.length>7;
});
console.log(f1);

const f2=chemicals.filter((x,y)=>y>1);
console.log(f2);

const f3=chemicals.map(x=>x+'es');
console.log(f3);

const f4= chemicals.map((elem,index,arr)=> {
// console.log(elem,index,arr);
return elem.length;
});
console.log(f4);

const arr1=[10,20,30,40,50];
const f5 = arr1.reduce((a,b)=>a+b);
console.log(f5);

// const f6=arr1.reduce((accum,elem,index,arr)=>{
//     console.log(accum,elem,index,arr);
// },0);

const ave = arr1.filter(elem=>elem>=30).reduce((accm,elem,index,arr)=>
    elem/arr.length+accm,0);

console.log(ave);
