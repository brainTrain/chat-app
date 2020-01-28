import React from 'react';


class App extends React.Component {
  render () {
    const { messages } = this.props;

    return (
      <ul>
        {messages.map((message, index) => {
          const { text } = message;
          return (
            <li key={index}>
              { text }
            </li>
          );
        })}
      </ul>
    );
  }
}

export default App;
