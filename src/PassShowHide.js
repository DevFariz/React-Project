import React, { Component } from "react";

export default class PassShowHide extends Component {
  state = {
    showPassActive: false,
    passType: "password"
  };

  checkboxClick = () => {
      if(this.state.showPassActive === false){
        this.setState({showPassActive: true, passType: "text"})
      }else{
        this.setState({showPassActive: false, passType: "password"})
      }
      
  }

  render() {

    const {showPassActive, passType} = this.state;

    return (
      <form>
        <label>
          Password: <input type={passType} />
        </label>
        <label>
          Show password <input type="checkbox" checked={showPassActive} onChange={this.checkboxClick}/>
        </label>
      </form>
    );
  }
}
