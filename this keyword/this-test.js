
// function foo(){
//    // let x=10;
//     const y = {
//         firstName:"foo",
//         lastName:"baz"
//     };
//     console.log(this.firstName);
// }
// const res = foo();

user = {
    
    fname: "dani",
    print: function(){
        console.log(this);
        console.log(this.fname);
    }
}
user.print();