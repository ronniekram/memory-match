import React from "react";

function Card(cards) {
  let randomNumber = () => {
    return Math.floor(Math.random() * 36) + 1;
  }

  let logCards = console.log(cards)

  return (<div>
    {logCards}
  </div>)


}

export default Card;