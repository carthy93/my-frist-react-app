import React, { Component } from "react";

export default class LifeCycleMethod extends Component {
  constructor(props) {
    console.log("constructor method called");
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps method called");
    return null;
  }

  shouldComponentUpdate(prevProps, prevState) {
    console.log("should components update method called");
    return null;
  }

  render() {
    console.log("render method called");
    return (
      <div>
        <h1>Class component</h1>
        <button onClick={() => this.setState({ isLoggedIn: false })}>
          Logout
        </button>
      </div>
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("get snapshot before update method called");
    return null;
  }

  componentDidMount() {
    console.log("component did mount method called");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("component did update method called");
    return null;
  }
}
