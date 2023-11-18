
const product = require('../models/product')

exports.getAllProduct =(req,res,next)=>{
res.json(product.getAllProduct());
}

exports.getProductById =(req,res,next)=>{
    res.json(product.getProductById(req.params.id));
    }

exports.saveProduct = (req,res)=>{
    console.log(req.body)
    const {id,title,description,price} = req.body;
    new product(null,title,description,price).save(); //cons pro = new product(null,req.body.title,req.body.description,req.body.price);
    res.status(201).end();
}

exports.updateProduct = (req,res)=>{
    const {title,description,price} = req.body;
    const prod = new product(null,title,description,price)
    prod.id=req.params.id;
    prod.updateById(req.params.id);
    res.status(200).json(prod);
}

exports.deleteProduct = (req,res)=>{
    product.deleteById(req.params.id);
    res.status(200).end();
}