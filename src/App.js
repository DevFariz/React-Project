import React, { Component } from "react";
// import PassShowHide from "./PassShowHide";
// import SignUpForm from "./SignUpForm";
// import DidMount from "./DidMount";
// import Keypress from "./Keypress";
// import Input from "./Input";
// import GetDataFromUser from "./GetDataFromUser";
import GetItemsFromList from "./GetItemsFromList";

export default class App extends Component {
  state = {
    name: "Click",
    isClicked: false
  };

  // clickBtn = () => {
  //   if(!this.state.isClicked){
  //     this.setState({ name: "Clicked", isClicked: true });
  //   }else{
  //     this.setState({ name: "Click", isClicked: false });
  //   }
  // };

  render() {
    const { name, isClicked } = this.state;
    return (
      <div>
        {/* <button className={isClicked ? "btn_clicked" : "btn"} type="button" onClick={this.clickBtn}>
          {name}
        </button> */}
        {/* <DidMount />
        {isClicked === false && (<Keypress />)}
        <Input /> */}
        {/* <SignUpForm /> */}
        {/* <PassShowHide /> */}
        {/* < GetDataFromUser /> */}
        <GetItemsFromList />
      </div>
    );
  }
}

