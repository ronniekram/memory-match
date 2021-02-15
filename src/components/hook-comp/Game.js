import React, { useState, useEffect } from 'react';
import Card from './Card';
import images from './images'

const Game = () => {
  const [deck, setDeck] = useState([]);

   const imageMap = () => images.map(image => {
    console.log(image.name)
  })

  return (
    <div className="ui grid">
      <div className="four column row">
        {imageMap()}
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
    </div>
  )
};

export default Game;