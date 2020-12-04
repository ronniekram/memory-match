import './App.css';
import React from "react";
import Header from "./components/nav/header";
import Footer from "./components/nav/footer";
import DropDown from "./components/nav/dropdown";
import Easy from "./components/cards/easy";
import Normal from "./components/cards/easy";
import Hard from "./components/cards/easy";
import XtraHard from "./components/cards/easy";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
