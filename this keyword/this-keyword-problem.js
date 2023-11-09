user={
    fname:'dani',
    lname:'belay',
    sayHi(){
        console.log(this);
        console.log(`${this.fname} say hi.........`);
    }
}
/*setTimeout(user.sayHi,1000);*/
//1. Wrapper
setTimeout(()=>user.sayHi(),2000);

 setTimeout(function(){
    user.sayHi();
},4000);

//2. bind
setTimeout(user.sayHi.bind(user),2000);

//3. call + wrapper
setTimeout(()=>user.sayHi.call(user),2000);

//4. apply + wrapper
setTimeout(()=>user.sayHi.apply(user),2000);