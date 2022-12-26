import React, { Component } from 'react'
import BarcodeScannerComponent from 'react-qr-barcode-scanner';
import Select from 'react-select'
import Header from '../commons/Header'
import Button from '../commons/Button';

export default class TransactionOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ],
      data: "Not Found",
      scaneStatus: false
    };
  }

  isScane = () => {
    this.setState({ scaneStatus: !this.state.scaneStatus })
  }

  onScane = (err, result) => {
    console.log(result);
    if (result) {
      this.setState({data: result.text});
    } else {
      this.setState(err);
    }
  }

  render() {
    return (
      <div>
        <Header text={"TRANSACTION - OUT"} />
        <div>
          <Select options={this.state.options} />
          <Button
            hasShadow
            isPrimary
            className="btn mt-3"
            isLoading={false}
            onClick={this.isScane}
          >
            Scane Barcode
          </Button>
        </div>
        {
          this.state.scaneStatus ?
            <div>
              <BarcodeScannerComponent
                width={300}
                height={300}
                onUpdate={this.onScane}
              />
              <p>{this.state.data}</p>
            </div> :
            ""
        }
      </div>
    )
  }
}
