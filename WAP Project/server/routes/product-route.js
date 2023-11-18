const express = require('express');
const productController = require('../controller/product-controller');
const router = express.Router();

 router.get('/',productController.getAllProduct);
 router.get('/:id',productController.getProductById);
 router.post('/',productController.saveProduct);
 router.put('/:id',productController.updateProduct);
 router.delete('/:id',productController.deleteProduct);

module.exports = router;