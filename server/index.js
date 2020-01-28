// set up basic express http server
const express = require('express');
const app = express();
const http = require('http').Server(app);
// import and set up socket sever
const chatIO = require('./socket.js');
const {
  SERVER_BASE,
  PORT,
  CLIENT_PORT
} = require('./constants.js');


chatIO(http);

const CORS_OPTIONS = {
  origin: SERVER_BASE + ':' + CLIENT_PORT
};

http.listen(PORT, () => {
  console.log('listening on *:' + PORT);
});
