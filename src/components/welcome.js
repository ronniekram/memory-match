import React from 'react';

class Welcome extends React.Component {

  render() {
    return <div className="dropdown">
      <form>
        <label> Choose a difficulty level: </label>
        <select>
          <option> Easy </option>
          <option> Medium </option>
          <option> Hard </option>
        </select>
      </form>
    </div>
  }
}


export default Welcome;