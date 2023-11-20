// const fs = require('fs');
// const { Writable } = require('stream');

// const read = fs.createReadStream('Landscape-Color.jpg');
// const writeble = fs.createWriteStream('nice.jpg');

// read.on('data',chunk=>{
//    // console.log(chunk.length);
//    writeble.write(chunk);
// })

class Person {

    constructor(name = 'John') {

        this.name = name;

    }


    getName() {

        console.log(this.name);

    }

}


//exports = new Person('Bella');