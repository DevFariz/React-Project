import React, { Component } from "react";

export default class User extends Component {
  render() {
      const {name, placement} = this.props
    return (
      <div>
        <h3>{name}</h3>
        <p>{placement}</p>
      </div>
    );
  }
}
