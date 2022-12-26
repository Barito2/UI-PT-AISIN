import React, { Component } from 'react'
import Header from '../../components/commons/Header'
import TransactionPage from '../../components/transaction'

export default class Transaction extends Component {
  render() {
    return (
      <>
        <Header text="CHOOSE TRANSACTION" />
        <TransactionPage />
      </>
    )
  }
}
