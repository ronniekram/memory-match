import React from 'react';
import images from './images';

class CardBack extends React.Component {
  render() {
    function blankCards() {
      let i;
      for (i = 0; i <= 16; i++){
        i += 1;
        return <div className="card-back">x</div>
      }
    }
    return (
      <div className="image-container">
        {blankCards()}
      </div>
    )
  }
}

export default CardBack;