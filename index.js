const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressHds = require('express-handlebars');
const app = express();


app.set('view engine', 'ejs');

app.set('views', 'views');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',adminRoutes.router);

app.use(shopRoutes);

app.use((req, res, next)=>{
    res.status(404).render('404', {docTitle: "Shop"});
})


app.listen(3000);