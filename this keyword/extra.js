me={
fname:'Daniel',
lname: 'Belay',
getFullName: function(){
    return this.fname +'  '+this.lname;
}
}
const res = me.getFullName();
console.log(res);

you={
    fname:'amigo',
    lname:'de angolano'
}

const res1 = me.getFullName.bind(you);
const res2 = res1();
console.log(res2);
