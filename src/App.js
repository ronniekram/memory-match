import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Game from "./components/game";
import Medium from "./components/medium";
import Hard from "./components/hard";
import Welcome from "./components/welcome"
import GameOver from "./components/gameover"
import Header from "./components/nav/header";
import Footer from "./components/nav/footer";

class App extends React.Component {
  state = {
    showEndGame: false,
    score: 0,
  };

  handleEndGame = (boolean) => {
    if (boolean) {
      this.setState({ showEndGame: boolean, score: this.state.score + 1 });
    } else {
      this.setState({ showEndGame: boolean });
    }
  };
  render() {
    const { score, showEndGame } = this.state;
    return (
      <div>
        <Router>
          <Header score={score} />
            {showEndGame ? <GameOver newGame={this.handleEndGame} /> : null}
            {/* <Hard endGame={this.handleEndGame} /> */}
            {/* <Medium endGame={this.handleEndGame}/> */}
            <Game endGame={this.handleEndGame} />
            {/* <Welcome /> */}
          <Footer />
        </Router>
      </div>
    );
  }
}


export default App;
