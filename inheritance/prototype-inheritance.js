const fruit = ['banana','orange','apple','kiwi','mongo'];
// for(let i=0;i<fruit.length;i++){
//     console.log(fruit[i]);
// }
for(f of 'fruit'){
    //console.log(f);
}

const person={
    fname: 'Daniel',
    lname:'Belay',
    age:20
};

const student = Object.create(person);
student.grade = 'A';
for(i in student){
console.log(student[i]);
}
for(j in student){
    if(student.hasOwnProperty(j)){
        console.log(`own property: ${student[j]}`);
    }
    else{
        console.log(`inherited property: ${j}`);
    }
}