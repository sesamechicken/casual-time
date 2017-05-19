const http = require('http');
const casualTime = require('./index.js');



const server = http.createServer((req, res) => {
  const time = '05/15/2016 21:00:00';

  const ctCfg = {
    uppercase: true,
    verbose: true
  }
  // console.log('time: ', time);
  // console.log('casual time: ', casualTime.casualTime(time, 'casual'));
  console.log(time);
  console.log(casualTime(time, ctCfg));
  res.end();
});
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(8000);