const fs = require('fs')
const path = require('path')

// console.log(__dirname);
// console.log(__filename);

// console.log(path.basename(__dirname));
// console.log( path.basename(__filename));

// console.log(path.extname(__dirname));
// console.log( path.extname(__filename));

// console.log(path.parse(__dirname));
// console.log( path.parse(__filename));

// console.log(path.format(path.parse(__dirname)));
// console.log( path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__dirname));
// console.log(path.isAbsolute(__filename));

// console.log(path.join("folder1","folder2","main"));

//console.log(path.join(__dirname,"folder2","main"));

// const name = 'joe'

// console.log(path.join('folder',name,"main"));

// console.log(__dirname);
// const greeting = fs.readFileSync(path.join(__dirname,'greet.txt'), 'utf8');
// console.log(greeting);

fs.readFile(path.join(__dirname,'schedule.jpg'),'utf8',function(err,data){console.log(data);});
console.log('Done');

// const image = path.join(__dirname,'schedule.jpg');

// console.log(image);