import React, { Component } from "react";

export default class Keypress extends Component {
  state = {
    value: "green",
    checkingState: true
  };

  onKeyPress = (event) => {
    if (event.key === "1") {
      this.setState({ value: "green" });
    } else if (event.key === "2") {
      this.setState({ value: "red" });
    }
  };

  componentDidMount() {
    window.addEventListener("keypress", this.onKeyPress);
    console.log("fd");
  }

  componentWillUnmount() {
     window.removeEventListener("keypress", this.onKeyPress);
     alert("Aaa")
  }

  render() {
    console.log("render");
    const { value } = this.state;
    return (
      <div className="container">
        <button className={value}>
          Change color
        </button>
      </div>
    );
  }
}
