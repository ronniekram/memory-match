import React from 'react';

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      level: 'easy'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({level: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
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
        <input type="submit" value="Submit" />
      </form>
    </div>
  }
}


export default Welcome;