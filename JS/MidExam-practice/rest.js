function print(a,b,...more){

    console.log(a,b,more);
    console.log(a+b+more.reduce((x,y)=>x+y));
}
print(1,2,3,4,5);