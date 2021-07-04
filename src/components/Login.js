import React, { Component } from "react";
import Button from "./Button";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  changeState = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    if (this.state.isLoggedIn) {
      return (
        <>
          <h1>Welcome to React</h1>
          {/* <Button name="Logout" onClick={this.changeState()} /> */}
          <button onClick={this.changeState}>Logout</button>
        </>
      );
    } else {
      return (
        <form>
          <input type="text"></input>
          <Button name="submit" />
        </form>
      );
    }
  }
}
