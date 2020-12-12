import React from "react";
import _ from 'lodash';
import images from './images';

class Game extends React.Component {
  choices = []

  handleClick = event => {
    let pick = event.target;
    if (pick.getAttribute("flipped") === "found") {
      return;
    };

    if (pick !== this.choices[0]) {
      this.switch(pick);
      this.choices.push(pick);
    } else {
      this.switch(pick);
      this.choices = [];
    }

    if (this.choices.length > 2) {
      if (!this.checkName(this.choices[0], this.choices[1])) {
        this.switch(this.choices[0]);
        this.switch(this.choices[1]);
        this.choices.shift();
        this.choices.shift();
      } else {
        this.choices.shift();
        this.choices.shift();
      }
    }

    let allImages = document.getElementsByClassName("img-blank");
    if (allImages.length < 1) {
      this.props.endGame(true);
      let reset = document.getElementsByClassName("img");
      for (let i = 0; i < reset.length; i++) {
        reset[i].classList.add("img-blank");
        reset[i].setAttribute("flipped", "false");
        this.choices = [];
      }
    }
  }

  checkName = (pick1, pick2) => {
    if (pick1.getAttribute("name") === pick2.getAttribute("name")) {
      pick1.setAttribute("flipped", "found");
      pick2.setAttribute("flipped", "found");
      return true;
    } else {
      return false;
    }
  };

  switch = target => {
    if (target.getAttribute("flipped") === "false") {
      target.setAttribute("flipped", "true");
      target.classList.add("img");
    } else {
      target.setAttribute("flipped", "false");
      target.classList.remove("img");
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
          return(
            <div 
            className="img img-blank" 
            name={card.name}
            style={ { background: `url(${card.img_url})`} } 
            flipped="false" 
            onClick={this.handleClick}> 

            </div>
          )
        })}
        </div>
      </div>
    )
  }

}

export default Game;