import React from 'react';

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      level: 'easy'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({level: event.target.value})
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return <div className="dropdown">
      <form onSubmit={this.handleSubmit}>
        <label> Choose a difficulty level: </label>
        <select value={this.state.level} onChange={this.handleChange}>
          <option value=""> </option>
          <option value="easy"> Easy </option>
          <option value="medium"> Medium </option>
          <option value="hard"> Hard </option>
        </select>
        <input type="submit" value="Play!" />
      </form>
    </div>
  }
}


export default Welcome;