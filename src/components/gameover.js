import React from 'react';
import { messages } from "./messages";


class GameOver extends React.Component() {
  handleClick = () => {
    this.props.newGame(false);
  };

  render () {
    messages.sort(() => Math.random() - 0.5);

    return (
      <div className="game-over">
        <div className="message">
          <h2></h2>
          <p></p>
          <button></button>
        </div>
      </div>
    )
  }

}

export default GameOver;