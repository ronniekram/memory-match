import React from "react";
import _ from 'lodash';
import images from './images';

class Game extends React.Component {
  characters = [];
  handleClick = (event) => {
    let character = event.target;
    if (character.getAttribute("check") === "found") {
      return;
    }

    if (character !== this.characters[0]) {
      this.switch(character);
      this.characters.push(character);
    } else {
      this.switch(character);
      this.characters = [];
    }

    if (this.characters.length > 2) {
      if (!this.checkName(this.characters[0], this.characters[1])) {
        this.switch(this.characters[0]);
        this.switch(this.characters[1]);
        this.characters.shift();
        this.characters.shift();
      } else {
        this.characters.shift();
        this.characters.shift();
      }
    }
    let allPictures = document.getElementsByClassName("image-blank");
    if (allPictures.length < 1) {
      this.props.endGame(true);
      let reset = document.getElementsByClassName("image");
      for (let i = 0; i < reset.length; i++) {
        reset[i].classList.add("image-blank");
        reset[i].setAttribute("check", "false");
        this.characters = [];
      }
    }
  };

  checkName = (character1, character2) => {
    if (character1.getAttribute("name") === character2.getAttribute("name")) {
      character1.setAttribute("check", "found");
      character2.setAttribute("check", "found");
      return true;
    }
    return false;
  };

  switch = (target) => {
    if (target.getAttribute("check") === "true") {
      target.setAttribute("check", "false");
      target.classList.add("image-blank");
    } else {
      target.setAttribute("check", "true");
      target.classList.remove("image-blank");
    }
  };




  render() {
    let cards = _.sampleSize(images, 8)
    let cards2 = cards
    cards = cards.concat(cards2).sort(() => Math.random() - 0.5)
    return (
      <div className="game">
        <div className="inner-game">
        {cards.map(card => {
          if (card.check === "false"){
            return(
              <div 
              className="image image-blank" 
              name={card.name}
              style={ { background: `url('https://raw.githubusercontent.com/ronniekram/memory-match/main/src/images/card-back.png')`} } 
              check="false" 
              onClick={this.handleClick}> 
  
              </div>
            )
          } else {
            return(
              <div 
              className="image image-blank" 
              name={card.name}
              style={ { background: `url(${card.img_url})`} } 
              check="false" 
              onClick={this.handleClick}> 
  
              </div>
            )
          }
        })}
        </div>
      </div>
    )
  }

}

export default Game;