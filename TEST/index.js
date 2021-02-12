const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'css')))

app.get('/users', (req, res,next)=>{
    res.sendFile(path.join(__dirname, 'views', 'users.html'))
})

app.get('/', (req, res,next)=>{
    res.sendFile(path.join(__dirname, 'views', 'home.html'))
})

app.listen(3000);