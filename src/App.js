import React from 'react';
import './App.css';
import { socket, initSocket } from './socket';
import {
  SOCKET_BASE_URL,
  SOCKET_ENDPOINT
} from './constants'


class App extends React.Component {
  componentDidMount () {
    const socketOptions = {
      path: SOCKET_ENDPOINT
    };

    initSocket(SOCKET_BASE_URL, socketOptions, this.handleInitSocket);
  }

  handleInitSocket = () => {
    socket.on('connect', this.handleSocketConnected);
    socket.on('message', this.handleSocketMessage);
  }

  handleSocketConnected = () => {
    console.log('ohhai a socket connection!');
  }

  handleSocketMessage = (message) => {
    console.log('woah a message?', message);
  }

  handleChatForm = (event) => {
    event.preventDefault();
    socket.emit('message', 'sup?');
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleChatForm}>
            <input type="text" />
            <button>Send Chat</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
