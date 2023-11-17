const express = require('express')

const app = express();
const path = require('path');

// app.disable('case sensitive routing');
app.set('port',process.env.PORT || 3000);
const port = app.get('port');

app.use(express.urlencoded({extended:true}));

app.get('/user',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'user.html'));
})

app.post('/user',(req,res)=>{
    console.log(req.body)
    res.send('login successfully');
})

app.get('/',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'slash.html'));
})


app.get('/product',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'/product.html'));
})

app.post('/product',(req,res)=>{
    console.log(req.body);
    res.send('Product Add successfuly')
})


app.listen(3000,()=>console.log("running on 3000"));