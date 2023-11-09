function printNumbers(from, to){
let currentNumber= from;
const intervalId = setInterval (function(){
    console.log(currentNumber);
    if(currentNumber===to){
        clearInterval(intervalId);
    }
    currentNumber++;
},1000);
}
printNumbers(1,9);
