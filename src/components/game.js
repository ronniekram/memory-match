import React from "react";
import Card from "./cards/card";

function Game(cards) {
  console.log(cards)

  return (
    <div className="game">
      <Card cards={cards} />
    </div>
  )

}

export default Game;