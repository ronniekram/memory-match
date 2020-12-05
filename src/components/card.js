import React from "react";
import ReactCardFlip from 'react-card-flip';
import _ from 'lodash';
import images from './images';

class Card extends React.Component {

  render(){
    let imageArray = _.sampleSize(images, 8);

    function randomCards(imageArray) {
      console.log(imageArray)
      imageArray.forEach(card => {
        return (<div>
          {console.log(card.img_url)}
        </div>)
      })
    }
    return (
      <div className="image-container">
        {randomCards(imageArray)}
      </div>
    )
  }
  
}

export default Card;