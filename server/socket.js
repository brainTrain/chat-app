const {
  SOCKET_CONNECT_EVENT,
  SOCKET_DISCONNECT_EVENT,
  SOCKET_MESSAGE_EVENT
} = require('./constants');

// socket.io chat instantiation/listeners
const chatIo = function (http) {
  const io = require('socket.io')(http, { path: '/chat' });

  io.on(SOCKET_CONNECT_EVENT, function (socket) {
    const {
      id,
      handshake: {
        query: {
          username
        }
      }
    } = socket;


    socket.on(SOCKET_MESSAGE_EVENT, function (message) {
      const messagePayload = {
        connectionId: id,
        username,
        text: message
      };

      io.emit(SOCKET_MESSAGE_EVENT, messagePayload);
    });

    socket.on(SOCKET_DISCONNECT_EVENT, function () {
      console.log('socket disconnected');
    });
  });
}

module.exports = chatIo;
