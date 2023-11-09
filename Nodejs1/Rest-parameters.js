function sum(a,b,...more){
    //console.log(a,b,more);
    return a+b+more.reduce((accum,element)=>accum+element);
}
console.log(sum(1,2,3,4,5,6,7,9,50));
console.log(sum(11,22,33,4,5,6,7,9));