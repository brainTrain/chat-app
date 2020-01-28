import React from 'react';
import socketIO from 'socket.io-client';
import './App.css';
import {
  SOCKET_BASE_URL,
  SOCKET_ENDPOINT
} from './constants'

const socketOptions = {
  path: SOCKET_ENDPOINT
};

class App extends React.Component {
  state = {
    socket: {}
  }

  componentDidMount () {
    this.initSocket();
  }

  initSocket = () => {
    const socket = socketIO(SOCKET_BASE_URL, socketOptions);
    this.setState({ socket });

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
    const { socket } = this.state;
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
