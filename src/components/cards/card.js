import React from "react";

function Card(cards) {
  let randomNumber = () => {
    return Math.floor(Math.random() * 36) + 1;
  }

  return (<div>
    {randomNumber()}
  </div>)
}

export default Card;