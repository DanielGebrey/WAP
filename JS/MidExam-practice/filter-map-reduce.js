const color=[
    'black',
    'white',
    'blue',
    'red',
    'green'
];
// const filt=color.filter((x,y,z)=>{
//     console.log(y,x,z);
//     return x.length==3;
// });
// console.log(filt);

// const mapp = color.map((x,y,z)=>{
//     console.log(x,y,z);
//     return x.length;
// });

// console.log(mapp);

const reducee = color.reduce((x,y)=>x+', '+y);
console.log(reducee);
