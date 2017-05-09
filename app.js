const http = require('http');
const casualTime = require('./index.js');


const server = http.createServer((req, res) => {
  const time = '05/08/2017 21:00:00';
  // console.log('time: ', time);
  // console.log('casual time: ', casualTime.casualTime(time, 'casual'));
  console.log(time);
  console.log(casualTime(time));
  res.end();
});
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(8000);