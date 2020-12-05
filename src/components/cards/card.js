import React from "react";

function Card({cards}) {
  let randomNumber = () => {
    return Math.floor(Math.random() * 36) + 1;
  }

  return (<div>
    <p> {randomNumber()}</p>
  </div>)
}

export default Card;