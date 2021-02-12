const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',adminRoutes.router);

app.use(shopRoutes);

app.use((req, res, next)=>{
    res.status(404).render('404');
})


app.listen(3000);