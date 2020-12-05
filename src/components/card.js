import React from "react";
import ReactCardFlip from 'react-card-flip';
import _ from 'lodash';
import images from './images';

class Card extends React.Component {

  render(){
    let imageArray = _.sampleSize(images, 8);

    function randomCards() {
      return imageArray.map(card => {
        <div className="card-front">
          <img src={card.img_url} className="card-image" />
        </div>
      })
    }
    return (
      <div className="image-container">
        {randomCards()}
      </div>
    )
  }
  
}

export default Card;