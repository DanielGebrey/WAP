// window.onload= function(){
//   fetch('http://localhost:3000/product')
// .then(response=>response.json())
// .then(data=>console.log(data));
// }

// const { type } = require("os");


window.onload= async function(){
    const response = await fetch('http://localhost:3000/product')
    const result = await response.json();
    console.log(result);
    document.getElementById('save').onclick = saveProduct;
  }

  async function saveProduct(){
    const obj = {
        title:"Angular",
        description:"difficult",
        price: 2000
    }
   const response = await fetch('http://localhost:3000/product',{
        method:'POST',
        headers:{
            'Content-Type' :'application/json'
        },
        body:JSON.stringify(obj)
    });
    console.log(response);
  }