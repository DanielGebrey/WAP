const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/subscribers')
const db =mongoose.connection

db.on('error',(error)=>console.error(error))
db.once('open',()=>console.log('connected to database'))

app.get('/dani',(req,res)=>{
    res.send('daniel belay');
})

app.listen(3000,()=>console.log('running at 3000'));