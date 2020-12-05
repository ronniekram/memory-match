import React from "react";

function Card({cards}) {
  let randomNumber = () => {
    return Math.floor(Math.random() * 36) + 1;
  }

  let randomCard = () => {
    cards && cards.forEach(card => {
      if (card.id === randomNumber()) {
        console.log(card)
      }
    })
  }

  return (<div>
    <p> {randomCard()}</p>
  </div>)
}

export default Card;