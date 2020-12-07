import React from "react";
import Card from "./card";
import _ from 'lodash';
import images from './images';

class Game extends React.Component {
  render() {
    let cards = _.sampleSize(images, 8)
    return (
      <div className="game">
        {images.map(img => {
          return(
            <div className="card-img" key={img.id} style={ { background: `url(${img.img_url})`} } onClick={this.handleClick}> 

            </div>
          )
        })}
      </div>
    )
  }

}

export default Game;