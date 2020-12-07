import React from "react";
import Login from "./login";
import Game from "./game";
import GameOver from "./gameover"
import Header from "./components/nav/header";
import Footer from "./components/nav/footer";

class Main extends React.Component {
  state = {
    showLogin: true,
    showEndGame: false,
    name: "",
    score: 0
  };

  handleLogin = (name, boolean) {
    this.setState({name: name, showLogin: boolean})
  };

  handleEndGame = (boolean) {
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
        {showLogin ? <Login name={this.handleLogin}/> : null}
        {showEndGame ? <GameOver newGame={this.handleEndGame} /> : null}
        <Header name={name} score={score} />
        <Game endGame={this.handleEndGame} />
        <Footer />
      </div>
    )
  }
}

export default Main;