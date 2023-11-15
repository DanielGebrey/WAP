function foo(arg1,arg2,arg3){
    console.log('3 arguments',arg1,arg2,arg3);
}

function foo(arg1,arg2){
    console.log('2 arguments',arg1,arg2);
    console.log('arguments',arguments);
}
//foo();
foo(1);
foo(1,2,3);
foo(1,2,3,4);