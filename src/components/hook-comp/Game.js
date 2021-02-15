import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import Card from './Card';
import images from './images'

const Game = () => {
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    let cards = _.sampleSize(images, 8);
    let cards2 = cards;
    cards = cards.concat(cards2).sort(() => Math.random() - 0.5);
    setDeck(cards);
  }, [])

  return (
    <div className="ui grid">
      {console.log(deck)}
      <div className="four column row">
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
    </div>
  )
};

export default Game;