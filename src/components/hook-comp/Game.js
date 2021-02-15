import React from 'react';
import Card from './Card';

const Game = () => {
  return (
    <div className="ui grid">
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