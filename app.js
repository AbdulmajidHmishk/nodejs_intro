import http from 'http';

const hostname = '127.0.0.1';
const port = 3000 ; 

const server = http.createServer((req, res )  =>{

console.log(`Anfrage erhalten: ${req.method} ${req.url}`);

res.writeHead(200, {"content-Type" : 'text/plain'});
res.end('hello welt vom Node.js Server. ')

});

server.listen(port,hostname,() => {

console.log (`server gestartet unter Http://${hostname}:${port}/`);

})