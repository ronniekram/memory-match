import React from "react";

class Header extends React.Component {
  render() {
    const { name, score } = this.props;
    return ( 
      <div className="nav">
        <div className="nav-left">
          <p className="left"> Memory Match Game </p>
        </div>

        <div className="nav-right">
          <div className="user-name"> {name} </div>
          <div className="user-score"> <p
          className="right"> Score: {score} </p> </div>
        </div>
      </div>)
  }
}

export default Header;