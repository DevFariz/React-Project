import React, { Component } from "react";

export default class Input extends Component {
  state = { value: "" };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
      console.log(this.state.value)
    return (
      <label htmlFor="name">
        Name:
        <input id="name" name="name" onChange={this.handleChange} />
      </label>
    );
  }
}
