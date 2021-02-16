const { Router } = require('express');
const express =  require('express');
const path = require('path');
const router = express.Router();

const rootDir = require('../util/path');
const productController = require('../controllers/product')



router.get('/add-product', productController.getaddProduct);
  
router.post('/add-product', productController.postAddProduct)

module.exports = {router};