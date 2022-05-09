import React, { Component } from "react";

export default class GetDataFromUser extends Component {
  state = {
    isBtnDisabled: true,
    isFullNameEmpty: true,
    isAddressEmpty: true,
    isTelEmpty: true
  };

  submitForm = (e) => {
    e.preventDefault();
    alert("Gonderildi")
  };

  setFullName = (e) => { 
    this.setState({isFullNameEmpty: true})
    e.target.value !== "" && this.setState({isFullNameEmpty: false})
    // e.target.value !== "" ? this.setState({isFullNameEmpty: false}) : this.setState({isFullNameEmpty: true})
  };

  setAddress = (e) => {
    e.target.value !== "" ? this.setState({isAddressEmpty: false}) : this.setState({isAddressEmpty: true})
  };

  setMobilePhone = (e) => {
    e.target.value !== "" ? this.setState({isTelEmpty: false}) : this.setState({isTelEmpty: true})
  };

  render() {
    const { isFullNameEmpty, isAddressEmpty, isTelEmpty } = this.state;
    
    return (
      <form onSubmit={this.submitForm}>
        <label>
          A.S.A<input type="text" onChange={this.setFullName}></input>
        </label>
        <label>
          ünvan<input type="text" onChange={this.setAddress}></input>
        </label>
        <label>
          Telefon nömrəsi
          <input type="tel" onChange={this.setMobilePhone}></input>
        </label>
        <button type="submit" disabled={isFullNameEmpty || isAddressEmpty  || isTelEmpty ? true : false}>
          Send
        </button>
      </form>
    );
  }
}
