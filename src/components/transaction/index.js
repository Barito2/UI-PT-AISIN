import React, { Component } from 'react'
import Button from '../commons/Button'

export default class TransactionPage extends Component {
  render() {

    const redirectTo = link => {
      window.location.replace(link);
    }

    return (
      <div className='d-flex justify-content-center flex-column mt-3'>
        <Button
          hasShadow
          isSuccess
          isLarge
          className="btn mt-3 m-auto"
          isLoading={false}
          style={{ width: "200px" }}>
          IN
        </Button>
        <Button
          hasShadow
          isDanger
          isLarge
          className="btn mt-3 m-auto"
          isLoading={false}
          style={{ width: "200px" }}
          onClick={() => redirectTo("transaction-out")}>
          OUT
        </Button>
      </div>
    )
  }
}
