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
  }

}

export default Login;