import swal from 'sweetalert';
import LoginForm from "../../components/login/LoginForm";
import React, { Component } from 'react'
import Header from '../../components/commons/Header';

export default class Login extends Component {

  render() {
    const handleSubmit = data => {
      if (data.npk == "001") {
        window.location.replace(`/transaction`);
      } else {
        swal("NPM salah", "", "error");
      }
    }
    return (
      <>
        <Header text={"Spare Parts Management"} />
        <LoginForm onSubmit={handleSubmit} />
      </>
    )
  }
}
