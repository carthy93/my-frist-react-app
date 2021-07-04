import React, { Component } from "react";

export class Speaker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMuted: true,
    };
  }

  render() {
    const { isMuted } = this.state;
    if (isMuted) {
      return (
        <>
          <h1>You are Muted</h1>
          <button onClick={() => this.setState({ isMuted: false })}>
            Unmute
          </button>
        </>
      );
    } else {
      return (
        <>
          <h1>You are speaking</h1>
          <button onClick={() => this.setState({ isMuted: true })}>Mute</button>
        </>
      );
    }
  }
}

export default Speaker;
