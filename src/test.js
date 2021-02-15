import React, { useState, useEffect } from 'react';
import Game from './components/game';
import GameOver from './components/gameover';
import Header from './components/nav/header'
import Footer from './components/nav/footer';

const App = () => {
  const [showEndGame, selectShowEndGame] = useState(false);
  const [score, setScore] = useState(0);

  const handleEndGame = (showEndGame) => {
    if (showEndGame) {
      
    }
  }

}

export default App;