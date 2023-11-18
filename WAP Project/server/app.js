const express = require('express')

const productRouter = require('./routes/product-route')

const app = express()

app.use(express.json());

app.use('/product',productRouter);

app.use((err,req,res,next)=>{
    res.status(500).send(`Server Error ${err.message}`)
})


app.listen(3000,()=>console.log('listing at 3000'));