import React from 'react';

class Welcome extends React.Component {

  findDifficulty(event) {
    if (event.target.className === "easy") {
      console.log("easy level")
    } else if (event.target.className === "medium") {
      console.log("medium level")
    } else if (event.target.className === "hard")
      console.log("hard level")
  }

  render() {
    return <div className="dropdown">
      <form>
        <label> Choose a difficulty level: </label>
        <select>
          <option className="easy" onClick={() => this.findDifficulty}> Easy </option>
          <option className="medium" onClick={() => this.findDifficulty}> Medium </option>
          <option className="hard" onClick={() => this.findDifficulty}> Hard </option>
        </select>
      </form>
    </div>
  }
}


export default Welcome;