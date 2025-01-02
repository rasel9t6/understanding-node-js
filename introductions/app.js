import http from 'node:http';
import { createServer } from 'http';
import fs from 'fs';

const server = createServer();

server.on('request', (req, res) => { 
    const result = fs.readFileSync('./test.txt');
    res.setHeader('Content-Type', 'text/plain');
    res.end(result);
})

server.listen(4080,"127.0.0.1", () => {
    console.log('Server has started on:', server.address());
 });