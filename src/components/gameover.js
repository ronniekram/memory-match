import React from 'react';
import { messages } from "./messages";


class GameOver extends React.Component() {
  handleClick = () => {
    this.props.newGame(false);
  };

  
}

export default GameOver;