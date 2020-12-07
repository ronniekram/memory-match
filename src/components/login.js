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
    return null
    // will contain form with input for a name - handleChange
    // form will need submit button to set a users name - handleClick
  }

}

export default Login;