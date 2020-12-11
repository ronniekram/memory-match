import React from "react";
import _ from 'lodash';
import images from './images';

class Game extends React.Component {
  choices = []

  handleClick = event => {
    let pick = event.target;
    if (pick.getAttribute("check") === "found") {
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
      let reset = document.getElementsByClassName("image");
      for (let i = 0; i < reset.length; i++) {
        reset[i].classList.add("img-blank");
        reset[i].setAttribute("check", "false");
        this.choices = [];
      }
    }
  }

  checkName = (pick1, pick2) => {
    if (pick1.getAttribute("name") === pick2.getAttribute("name")) {
      pick1.setAttribute("check", "found");
      pick2.setAttribute("check", "found");
      return true;
    } else {
      return false;
    }
  };

  switch = target => {
    if (target.getAttribute("check") === "true") {
      target.setAttribute("check", "false");
      target.classList.add("img-blank");
    } else {
      target.setAttribute("check", "true");
      target.classList.remove("img-blank");
    }
  };




  render() {
    let cards = _.sampleSize(images, 8)
    return (
      <div className="game">
        <div className="inner-game">
        {cards.map(card => {
          return(
            <div 
            className="img img-blank" 
            name={card.name}
            key={card.id} 
            style={ { background: `url(${card.img_url})`} } 
            check="false" 
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