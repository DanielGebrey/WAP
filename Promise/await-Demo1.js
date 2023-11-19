console.log('start');

async function foo(){
    console.log('Inside foo');
    return 'Hello';
}

async function bar(){
    const result = await foo();
    console.log('everything after await should wait untile all the sync execute');
    console.log(`Result of foo(): ${result}`);
}
bar();
console.log('end');