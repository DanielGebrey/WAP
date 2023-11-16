const express = require('express')
const app = express()

app.set('view engine','ejs')
app.use(logger)

app.get('/',(req,res)=>{
    console.log()
    
   // res.status(500).send('hi');
    //res.send('Hi')
    //res.status(500).json({message:"Error"})
    //res.download('server.js')
    res.render('index',{ text: "WORLD" })
})

const userRouter = require('./router/user')

app.use('/user',userRouter)

function logger(req,res,next){
    console.log(req.originalUrl)
    next()
}

app.listen(3000);

