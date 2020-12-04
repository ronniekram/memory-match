import './App.css';
import React from "react";
import Header from "./components/nav/header";
import Footer from "./components/nav/footer";
import DropDown from "./components/nav/dropdown";
import Game from "./components/game"

function App() {
  return (
    <div className="App">
      <Header />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
