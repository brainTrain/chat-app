import React from 'react';
import { socket } from './socket';
import './ChatMessages.css';
import faceImage from './awesome-face.jpg';

class App extends React.Component {
  render () {
    const { messages } = this.props;

    return (
      <ul className="message-container">
        {messages.map((message, index) => {
          const {
            connectionId,
            text,
            username
          } = message;
          const isUser = socket.id === connectionId;
          const isUserClass = isUser ? 'is-user' : '';

          return (
            <li
              key={index}
              className={`message ${isUserClass}`}
            >
              <img
                alt="avatar smiling lolface"
                src={faceImage}
                className="avatar"
              />
              <div className="username">
                { username }
              </div>
              <div className="text">
                { text }
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default App;
