import React from "react";

function Card({cards}) {
  let randomNumber = () => {
    return Math.floor(Math.random() * 36) + 1;
  }

  let randomCard = () => {
    cards && cards.find(card => {
      if (card.id === randomNumber()) {
        console.log(card)
      }
    })
  }

  return (<div>
    {randomCard()}
  </div>)
}

export default Card;