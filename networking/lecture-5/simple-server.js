import { createServer } from 'net';

const server = createServer((socket) => {
  socket.on('data', (data) => {
    console.log(data);
  });
});

server.listen(3099, '127.0.0.1', () => {
  console.log('opened server on', server.address());
});
