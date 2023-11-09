const animal = {
    name : 'Default',
    eat: true,
    walk: function(){
        console.log(`${this.name} is walking ....`);
    },
    setName(newName){
        this.name = newName;
    }
}

let rabbit = Object.create(animal);
rabbit.jump= true;
rabbit.name='cotton rabbit';

//console.log(rabbit);
//rabbit.walk();

let pig = Object.create(animal);
//pig.name='white pig';
pig.walk();
pig.setName('black pig');
console.log(pig.name);
pig.walk();
// console.log(pig)
