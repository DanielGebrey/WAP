const express = require('express')
const apptest = express()

const path = require('path')

apptest.enable('case sensitive routing');

apptest.use('/test',(req,res)=>{
    res.end("number 1...")
})

apptest.use('/search',(req,res)=>{
    console.log(req.query)
    res.send('searching place')
})

apptest.use('/user/:uid/post/:pid/comment/:cid',(req,res)=>{
    res.send(`UID: ${req.params.uid}, PID:${req.params.pid},CID:${req.params.cid}`)
})

apptest.get('/product',(req,res)=>{
  res.status(200).sendFile(path.join(__dirname,'index.html'))  
})

apptest.post('/product',(req,res)=>{
    console.log(req.body)
    res.send('data recieved and processed')
})

app.use('/test',(req,res)=>{
    res.send('<h>THIS IS FROM TEST MIDLEWARE</h>')
    
})

// app.use(function(req,res,next){
//     console.log('test')
//     res.end('Inside empty');
// })


// app.use('/user',(req,res)=>{
//     res.write('hello...');
//     next();
// })

// app.use('/product',(req,res)=>{
//     res.write('world');
//     next();
// })


apptest.listen(9999,()=>console.log('listen on 9999'));