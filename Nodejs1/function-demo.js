//function declaration :: if we switch the order it still works


function square(n){
    return n*n;
}
console.log(square(4));

//function expration :: if we switch the order it gives run-time error

const sum = function(a,b){
    return a+b;
}
console.log(sum(5,6));

const mult = function(c,d){
    return c*d;
}
console.log(mult(3,3));

// Annoymous function :: function that do not have a name
window.onload= function(){
    //alert('nice one');
}

//Arrow function :: same as lamda in java

const sub = (i,j) => {
    return i-j;
}
console.log(sub(9,3));

const f1= s=>s.length;
console.log(f1("d"));

const f2= ()=>{};
console.log(f2());

const f3 = ()=> 'hi';
console.log(f3());