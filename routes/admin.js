const { Router } = require('express');
const express =  require('express');
const path = require('path');
const router = express.Router();

const rootDir = require('../util/path');

const products =  [ ];

router.get('/add-product', (req, res, next) => {
    res.sendFile((path.join(__dirname, '../','views', 'add-product.html')))
  });
  
router.post('/add-product', (req, res, next)=>{
    products.push({title: req.body.title})
    res.redirect('/')
})

module.exports = {router, products};