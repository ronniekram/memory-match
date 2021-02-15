import React, { useState, useEffect } from "react";
import './app.css';
// import { useSpring, animated as a } from "react-spring";
import Header from './components/Header';
import Game from './components/Game';
import Footer from './components/Footer';

const App = () => {
  const [options, setOptions] = useState(null)
  const [highScore, setHighScore] = useState(0)

  return (
    <div>
      <Header options={options} highScore={highScore} setOptions={setOptions} setHighScore={setHighScore} />
      <div className="container game"> 
        <Game />
      </div>
    </div>
  )
};

export default App;