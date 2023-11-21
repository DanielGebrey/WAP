// module.exports.getName = function () {

//     console.log('Josh Edward');
//     console.log(typeof module.exports);

// };

exports.getFirstname = function () {

    console.log('Josh');

};

exports = {

    getLastname: function(){

        console.log('Edward');

    }

}

module.exports = function (){
    console.log('name here');
}

module.exports.getFullname = function (){

    console.log('Josh Edward');

}
