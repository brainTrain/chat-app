import React from 'react';
import sillyname from 'sillyname';
import './App.css';
import { socket, initSocket } from './socket';
import {
  SOCKET_BASE_URL,
  SOCKET_CONNECT_EVENT,
  SOCKET_ENDPOINT,
  SOCKET_MESSAGE_EVENT
} from './constants'
import ChatForm from './ChatForm';
import ChatMessages from './ChatMessages';


class App extends React.Component {
  state = {
    isSocketConnected: false,
    messages: []
  }

  componentDidMount () {
    const username = sillyname();
    const socketOptions = {
      path: SOCKET_ENDPOINT,
      query: `username=${username}`

    };

    initSocket(SOCKET_BASE_URL, socketOptions, this.handleInitSocket);
  }

  handleInitSocket = () => {
    socket.on(SOCKET_CONNECT_EVENT, this.handleSocketConnected);
    socket.on(SOCKET_MESSAGE_EVENT, this.handleSocketMessage);
  }

  handleSocketConnected = () => {
    this.setState({ isSocketConnected: true });
  }

  handleSocketMessage = (message) => {
    console.log('woah a message?', message);
    const { messages } = this.state;
    const newMessages = [ ...messages, message];

    this.setState({ messages: newMessages });
  }

  render () {
    const {
      isSocketConnected,
      messages
    } = this.state;

    return (
      <div className="App-content">
        <ChatMessages
          messages={messages}
        />
        <ChatForm />
      </div>
    );
  }
}

export default App;
