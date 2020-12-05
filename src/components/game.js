import React from "react";
import Card from "./card";
import CardBack from './cardback'

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <Card />
      </div>
    )
  }

}

export default Game;