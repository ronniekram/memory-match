import React from 'react';

const Header = ({ options, highScore, setOptions, setHighScore }) => {
  return (
    <div className="ui secondary pointing menu">
      <h3 className="item">Garden Match</h3>
      <a className="active item">Home</a>
      <a className="item">High Scores</a>
      <a className="item">Difficulty</a>
      <div className="right menu">
        {/* <div className="item"> */}
            <h3 className="item"> High Score: {highScore}</h3>
        {/* </div> */}
      </div>
    </div>
  )
};

export default Header;