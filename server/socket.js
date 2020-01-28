// socket.io chat instantiation/listeners
const chatIo = function (http) {
  const io = require('socket.io')(http, { path: '/chat' });

  io.on('connection', function (socket) {
    const connectionId = socket.id;

    socket.on('message', function (message) {
      console.log('ohhai a chat message', message);
      const messagePayload = {
        connectionId,
        text: message
      };
      socket.emit('message', messagePayload);
    });

    socket.on('disconnect', function () {
      console.log('socket disconnected');
    });
  });
}

module.exports = chatIo;
