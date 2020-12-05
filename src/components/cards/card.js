import React from "react";

function Card({cards}) {
  let randomNumber = () => {
    return Math.floor(Math.random() * 36) + 1;
  }

  // console log cards on fetch to check how to access
  // let randomCard = () => {
  //   cards && cards.filter(card => {
  //     if (card.id === randomNumber()) {
  //       console.log(card)
  //     }
  //   })
  // }

  return (<div>
    {randomNumber()}
  </div>)
}

export default Card;