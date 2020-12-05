import React from "react";
// import Easy from "./cards/easy";
// import Normal from "./cards/normal";
// import Hard from "./cards/hard";
// import XtraHard from "./cards/xtrahard";
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