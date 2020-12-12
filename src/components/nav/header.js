import React from "react";

class Header extends React.Component {
  render() {
    const { score } = this.props;
    return ( 
      <div className="nav">
        <div className="nav-left">
          <p className="left"> Memory Match Game </p>
        </div>

        <div className="nav-right">
          <div className="user-score"> <p
          className="right"> Score: {score} </p> </div>
        </div>
      </div>)
  }
}

export default Header;