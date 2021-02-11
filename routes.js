const http = require('http');
const express = require('express');
const app = express();

const server =  http.createServer(app);
app.use('/', (req, res, next)=>{
    console.log('first middleware');
    res.send('<h1>Home assignment</h1>')
    next()

})
app.use('/admin', (req, res, next)=>{
    console.log('first middleware');
    res.send('<h1>Admin assignment</h1>')
})
server.listen(3000);
