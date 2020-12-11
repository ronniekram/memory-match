import React from "react";

class Login extends React.Component {
  state = {}

  handleChange = (e) => {
    this.setState({name: e.target.value});
  };

  handleClick = (e) => {
    e.preventDefault();
    this.props.name(this.state.name, false);
  };

  render() {
    return (
      <div>
        <div>
          <form>
            <div>
              <label>Name:</label>
              <input 
              type="name"
              className="form" 
              onChange={this.handleChange} />

              <button onClick={this.handleClick} className="button" >
                Play!
              </button>
            </div>
          </form>
        </div>
      </div>
)
  }

}

export default Login;