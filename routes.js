const fs = require('fs');
const { Buffer } = require('buffer');


const requestHandler = (req,res)=>{
    const url = req.url;
if(url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<h1>Hello</h1>')
    res.write('<form action="/message" method="POST"><input type= "text" name="message" /> <button type="submit">send</button></form>')
    res.write('</html>');
    res.end()
}


if(url === '/message' && req.method === 'POST'){
    const body = [];
    req.on('data', (chunk)=>{
        console.log(chunk)
        body.push(chunk)
    })
    return res.on('end', ()=>{
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        fs.writeFileSync('message.txt', message);
    })
   
    res.statusCode = 302;
    res.setHeader('Location', '/')
    return res.end()
}

}

module.exports = requestHandler;