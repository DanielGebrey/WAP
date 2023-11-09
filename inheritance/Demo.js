let animal={
    eat :true,
    sleep:true,
    walk :function(){
        console.log('walking animal..');
    }
};

let rabbit ={
    jump: true
};

//rabbit.__proto__ = animal;
 rabbit = Object.create(animal);
rabbit.jump=true;

const longEar = Object.create(rabbit);
longEar.walk();

console.log(longEar.eat,longEar.jump);