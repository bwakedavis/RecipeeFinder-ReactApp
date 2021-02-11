const { Router } = require('express');
const express =  require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/products" method="POST"><input type="text" name="title"> <button type="submit">add</button></form>');
  });
  
router.post('/product', (req, res, next)=>{
    console.log(req.body)
    res.redirect('/')
})

module.exports = router