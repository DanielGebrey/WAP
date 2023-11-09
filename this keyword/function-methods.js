function foo(arg1,arg2){
    console.log(this);
    console.log(arg1,arg2);
    //console.log(arguments);
}

//console.log(foo.prototype===Function.prototype);
//foo.call({fname:'daniel',lname:'belay'},'Hi',[1,2,3]);


//foo.apply({fn:'yorda',ln:'Yohannes'},['hi',123,{age:78,address:'USA'}]);

const bindFoo=foo.bind({color:'red',size:125});
//console.log(bindFoo);
bindFoo('Hello','World');