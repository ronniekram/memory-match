import React from 'react';

const Header = ({ options, highScore, setOptions, setHighScore }) => {
  return (
    <div className="ui secondary pointing menu">
      <a className="active item">Home</a>
      <a className="item">Messages</a>
      <a className="item">Friends</a>
      <div className="right menu">
        <div className="item">
            <p className="item"> High Score: {highScore}</p>
        </div>
      </div>
    </div>
  )
};

export default Header;