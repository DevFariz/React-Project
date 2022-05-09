import React, { Component } from "react";

export default class DidMount extends Component {
  state = {
    data: null,
  };

  getData = async () => {
    const res = await fetch(
      "https://627506605dc4f5764b9d4a84.mockapi.io/api/v1/user"
    );
    const data = await res.json();

    return data;
  };

  componentDidMount() {
    this.getData().then((data) => {
      this.setState({ data: data });
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        {data !== null ? (
          <>
            <p>{data[0].name}</p> 
            <p>{data[0].placement}</p>
            <p>{data[0].id}</p>
          </>
        ) : (
          null
        )}
      </div>
    );
  }
}
