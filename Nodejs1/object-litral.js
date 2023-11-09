const person ={
    firstName:'Daniel',
    lastName: 'Belay',
    age: 20,
    'Date of Birth': '12-12-12'
};

// console.log(person);
// console.log(person.age);
// console.log(person['Date of Birth']);

// person.address = 'sehafa zelet';
// console.log(person.address);

// person['telephon number'] = '0900421795';
// console.log(person['telepon number']);

let type = 'status';
person[type]= 'single';
console.log(person);

console.log(typeof person);