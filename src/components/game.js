import React from "react";
import Easy from "./cards/easy";
import Normal from "./cards/easy";
import Hard from "./cards/easy";
import XtraHard from "./cards/easy";
import Card from "./cards/card";

function Game({cards}) {

  return (
    <div className="game">
      <Card cards={cards} />
    </div>
  )

}

export default Game;