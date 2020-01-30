import React from 'react';
import { socket } from './socket';
import { SOCKET_MESSAGE_EVENT } from './constants'


class App extends React.Component {
  state = {
    chatInput: ''
  }

  handleChatForm = (event) => {
    event.preventDefault();
    const { chatInput } = this.state;

    // only send a message if there is one to send
    if (chatInput) {
      socket.emit(SOCKET_MESSAGE_EVENT, chatInput);

      this.setState({ chatInput: '' });
    }
  }

  handleChatInputChange = (event) => {
    const { target: { value } } = event;

    this.setState({ chatInput: value.trim() });
  }

  render () {
    const { chatInput } = this.state;

    return (
      <form onSubmit={this.handleChatForm}>
        <label htmlFor="chat-input">
          Chat Input
        </label>
        <input
          name="chat-input"
          id="chat-input"
          type="text"
          onChange={this.handleChatInputChange}
          value={chatInput}
        />
        <button type="submit">Send Chat</button>
      </form>
    );
  }
}

export default App;
