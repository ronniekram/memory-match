import React from "react";
import Card from "./card";
import _ from 'lodash';
import images from './images';

class Game extends React.Component {
  choices = []

  handleClick = event => {
    let pick = event.target;
    if (pick.getAttribute("check") === "found") {
      return;
    }
  }




  render() {
    let cards = _.sampleSize(images, 8)
    return (
      <div className="game">
        {cards.map(card => {
          return(
            <div className="card-blank" key={card.id} style={ { background: `url(${card.img_url})`} } onClick={this.handleClick}> 

            </div>
          )
        })}
      </div>
    )
  }

}

export default Game;