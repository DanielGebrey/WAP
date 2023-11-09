
    // setTimeout(function() {
    //     alert("This is an alert after 3 seconds.");
    //   }, 3000)

    // function delayMessage(message,delay){
    //     setTimeout(function(){
    //         console.log("timeout");
    //     },delay);
    // }
    // delayMessage("delay message after 2 seconds",2000);

    function sum(num1,num2){
        console.log(num1+num2);
    }
    setTimeout(sum,1000,1,2);

    function test(x){
        console.log(x);
    }
    setInterval(test,2000,8);