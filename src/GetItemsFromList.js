import React, { Component } from "react";
import User from "./User";

export default class GetItemsFromList extends Component {
  state = {
    data: null,
    name: ""
  };

  getData = async () => {
    const response = await fetch(
      "https://627506605dc4f5764b9d4a84.mockapi.io/api/v1/user"
    );
    const data = await response.json();

    return data;
  };

//   sortEmployeeByName = () => {

//   }

  componentDidMount() {
    this.getData().then((data) => {
      this.setState({ data: data });
    });
  }

  searchData = (e) => {
      this.setState({name: e.target.value})
  }

  render() {
    const { data, name } = this.state;
    return (
      <>
        {data ? (
            <>
                <input type = "text" onChange={this.searchData}/>
                {data
                .filter((user) => (name === "") ? true : name.toLowerCase() === user.name.toLowerCase())
                .map((user) => (
                    <User key={user.id} name={user.name} placement={user.placement}/>
                ))}
            </>
        ) : (
          "Loading..."
        )}
      </>
    );
  }
}
