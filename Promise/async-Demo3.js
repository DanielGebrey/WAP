console.log('start');

const foo = async ()=>{
    console.log('Inside foo');
    //return 'hello';
    throw new Error('Whoops!!');
}

const result = foo();
result.then(data=>console.log(data)).catch(er=>console.log('Inside error' ,er.message));
//catch(eror=>console.log(`Erororoo ${eror}`));
console.log('end');