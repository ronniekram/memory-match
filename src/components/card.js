import React from "react";
import ReactCardFlip from 'react-card-flip';
import _ from 'lodash';
import images from './images';

class Card extends React.Component {

  render(){
    let imageArray = _.sampleSize(images, 8);

    function randomCards() {
      console.log(imageArray)
      imageArray && imageArray.forEach(card => {
        return (<div className="card-front">
          <p> {card.img_url}</p>
        </div>)
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