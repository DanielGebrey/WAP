const animal = {
   walk :function(){
    if(!this.isSleeping()){
        console.log('I walk');
    }
    },
sleep(){
    this.isSleeping = true;
}
}
const rabbit = Object.create(animal);
rabbit.name='white';

rabbit.sleep();
console.log(rabbit.isSleeping);
// animal.sleep();
console.log(animal.isSleeping);