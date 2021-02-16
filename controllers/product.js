

const products =  [ ];
exports.getaddProduct = (req, res, next) => {
    res.render('add-product', {docTitle: 'Add Product', 
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
})
  }

  exports.postAddProduct = (req, res, next)=>{
    products.push({title: req.body.title})
    res.redirect('/')
}

exports.getProducts = (req, res, next) => {
    console.log(adminData.products)
      // res.sendFile(path.join(__dirname,'../', 'views', 'shop.html'));
      res.render('shop', {prods: adminData.products, docTitle: "Shop"})
    }