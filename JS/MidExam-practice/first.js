// let x=2
// let y=10

// z= x+y
// console.log(z)

// const a = [
//     "Hydrogen",
//     "Helium",
//     "Lithium",
//     "Beryllium"
//     ];
//     const a2 = a.filter(function(s) {
//     return s.length > 7 });
//     const a3 = a.filter( s => s.length > 7 );
//     const a4 = a.find( s => s.length > 7 );
//     const a5 = a.findIndex( s => s.length > 7 );

//     console.log(a3,a4,a5);

// function f(x) {
//     console.log("x: " + x);
//     }
//     f();
//     f(1);
//     f(2, 3);

function sum(a,b,...more){
 total = a+b;

for(let i=0; i<more.length;i++){
    total+=more[i];
}
console.log(total);
return total;
}

sum(1,3,4,5,6);

const sum1 = function(x,y,...more){
    total = x+y;

    for(let i=0; i<more.length;i++){
        total+=more[i];
    }
    console.log(total);
    return total;
    }  
sum1(9,4,5,6);