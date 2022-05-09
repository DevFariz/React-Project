import React, { Component } from "react";

export default class App extends Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleClick = () => {
    this.setState({ value: "" });
  };
  
  render() {
      console.log(this.state.value)
    return (
      <div>
        <label>
          Name:{" "}
          <input
            value={this.state.value}
            name="Name"
            onChange={this.handleChange}
          />
        </label>
        <button onClick={this.handleClick}>X</button>
      </div>
    );
  }
}
