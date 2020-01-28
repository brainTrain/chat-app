import socketIO from 'socket.io-client';

export let socket = {
  on: function () {
    console.warn('socket.io-client\'s on() method not implimented');
  },
  emit: function () {
    console.warn('socket.io-client\'s emit() method not implimented');
  }
};

export function initSocket (baseURL, options, callback) {
  socket = socketIO(baseURL, options);

  callback();
}
