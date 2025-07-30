import http from 'http';
import { readFileSync } from 'fs';
import path, { dirname } from 'path'
import { fileURLToPath } from 'url';

//  C:\Users\abdul\OneDrive\Dokumente\nodejs_intro\app.js
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configPath = path.join(__dirname, 'config.json') ;
const config = JSON.parse(readFileSync(configPath, 'utf8'));
const {port,hostname} = config;


const server = http.createServer((req, res )  =>{

console.log(`Anfrage erhalten: ${req.method} ${req.url}`);

res.writeHead(200, {"content-Type" : 'text/plain'});
res.end('hello welt vom Node.js Server. ')

});

server.listen(port,hostname,() => {

console.log (`server gestartet unter Http://${hostname}:${port}/`);

})