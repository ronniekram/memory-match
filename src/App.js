import './App.css';
import React from "react";
import Header from "./components/nav/header";
import Footer from "./components/nav/footer";
import Game from "./components/game"

class App extends React.Component {
render() {
  return (
    <div className="root">
      <Header />
      <Game />
      <Footer />
    </div>
  )
}
}

export default App;
