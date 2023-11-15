function talk(lang){
    if(lang=='en'){
    console.log(`${this.firstName} can talk`);}
    else{
        console.log(`${this.firstName} selam wealekum`);
    }
}
const person = {
    firstName: 'John',
    lastName: 'smith',
    fullname:function (){
        console.log('My name is ',this.firstName);
    }
};

let person1 = Object.create(person);
// person1.firstName='qali';
// person1.fullname();
// person.fullname();
// console.log(this);

talk.bind(person,'endie')();
talk.call(person,['en']);

