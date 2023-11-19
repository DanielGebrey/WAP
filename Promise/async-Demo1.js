console.log('start');

async function foo(){
    console.log('Inside foo');
    return 'hello';
}

const result = foo();
result.then(console.log);
//console.log(result);
console.log('end');