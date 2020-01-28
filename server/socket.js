// socket.io chat instantiation/listeners
const chatIo = function (http) {
  const io = require('socket.io')(http, { path: '/chat' });

  io.on('connection', function (socket) {
    console.log('socket connected');

    socket.on('message', function (message) {
      console.log('ohhai a chat message', message);
      socket.emit('message', message);
    });

    socket.on('disconnect', function () {
      console.log('socket disconnected');
    });
  });
}

module.exports = chatIo;
