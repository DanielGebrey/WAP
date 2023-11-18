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

apptest.use('/test',(req,res)=>{
    res.send('<h>THIS IS FROM TEST MIDLEWARE</h>')
    
})

// apptest.use(function(req,res,next){
//     console.log('test')
//     res.end('Inside empty');
// })


apptest.get('/pack',(req,res,next)=>{
    console.log('1.....')
    next()
    console.log('1......1')
})

apptest.get('/pack',(req,res,next)=>{
    console.log('2........');
    next();
    console.log('2.....2');
})


apptest.listen(9999,()=>console.log('listen on 9999'));