import './App.css';
import React from "react";
import Header from "./components/nav/header";
import Footer from "./components/nav/footer";
import DropDown from "./components/nav/dropdown";
import Game from "./components/game"

class App extends React.Component {

  fetchCards = () => {
    return fetch("https://raw.githubusercontent.com/ronniekram/memory-match/main/cards.json")
    .then(resp => resp.json())
    // .then(data => {
    //   this.setState({
    //     cards: data.cards
    //   })
    // })
    .then(data => console.log(data.cards))
  }
  componentDidMount() {
    this.fetchCards()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Game cards={this.cards}/>
        <Footer />
      </div>
    );
  }
}

export default App;
