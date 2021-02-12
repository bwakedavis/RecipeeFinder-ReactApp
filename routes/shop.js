const express = require('express');
const path = require('path');

const rootDir = require('../util/path')
const adminData = require('./admin')
const router = express.Router();

router.get('/', (req, res, next) => {
  console.log(adminData.products)
    // res.sendFile(path.join(__dirname,'../', 'views', 'shop.html'));
    res.render('shop', {prods: adminData.products, docTitle: "Shop"})
  });

  module.exports = router;