import './App.css';
import React from "react";
import Game from "./components/game";
import GameOver from "./components/gameover"
import Header from "./components/nav/header";
import Footer from "./components/nav/footer";

class App extends React.Component {
  state = {
    showLogin: true,
    showEndGame: false,
    name: "",
    score: 0
  };

  handleEndGame = (boolean) => {
    if (boolean) {
      this.setState({showEndGame: boolean, score: this.state.score + 1});
    } else {
      this.setState({showEndGame: boolean});
    }
  };



  render() {
    const {showLogin, name, score, showEndGame} = this.state;

    return (
      <div>
        {showEndGame ? <GameOver newGame={this.handleEndGame} /> : null}
        <Header name={name} score={score} />
        <Game endGame={this.handleEndGame} />
        <Footer />
      </div>
    )
  }
}

export default App;
