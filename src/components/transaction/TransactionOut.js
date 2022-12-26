import React, { Component } from 'react'
import BarcodeScannerComponent from 'react-qr-barcode-scanner';
import Select from 'react-select'
import Header from '../commons/Header'
import Button from '../commons/Button';
import { Field, reduxForm } from 'redux-form';
import { renderField, SelectField } from '../commons/Field';

class TransactionOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: [
        { value: 'SC001', label: 'SC001' },
        { value: 'SC002', label: 'SC002' },
        { value: 'SC003', label: 'SC003' }
      ],
      data: "Not Found",
      scaneStatus: false
    };
  }

  isScane = () => {
    this.setState({ scaneStatus: !this.state.scaneStatus, data: "Not Found" })
  }

  onScane = (err, result) => {
    if (result) {
      console.log(result.text);
      this.setState({ data: result.text, scaneStatus: !this.state.scaneStatus });
    } else {
      this.setState(err);
    }
  }

  renderSuccessScane = () => (
    <>
      <div className='col-4'>
        <label htmlFor="Tujuan">Part</label>
      </div>
      <div className='col-8'>
        <span>{this.state.data}</span>
      </div>
      <div className='col-4 m-auto'>
        <label htmlFor="Tujuan">Warehouse</label>
      </div>
      <div className='col-8'>
        <Field
          id="Warehouse"
          type="text"
          name="Warehouse"
          component={renderField}
        />
      </div>
      <div className='col-4 m-auto'>
        <label htmlFor="Tujuan">Quantity</label>
      </div>
      <div className='col-8'>
        <Field
          id="Quantity"
          type="text"
          name="Quantity"
          component={renderField}
        />
      </div>
      <div className="col-12 text-center">
        <Button
          hasShadow
          isPrimary
          className="btn mt-3"
          isLoading={false}
        >
          Submit
        </Button>
      </div>
    </>
  )

  render() {
    return (
      <>
        <Header text={"TRANSACTION - OUT"} />
        <div className='row'>
          <div className='col-2'>
            <label htmlFor="Tujuan">Tujuan</label>
          </div>
          <div className="col-10">
            <Field
              type="select"
              name="Tujuan"
              component={SelectField}
              // label="Tipe File"
              options={this.state.option}
              noOptionsMessage={"Tidak ada data"}
              isLoading={false}
              placeholder="Silahkan Pilih...."
            />
          </div>
          <div className="col-12 text-center">
            <Button
              hasShadow
              isPrimary
              className="btn mt-3 text-center"
              isLoading={false}
              onClick={this.isScane}
            >
              Scane Barcode
            </Button>
            {
              this.state.scaneStatus ?
                <div>
                  <BarcodeScannerComponent
                    width={300}
                    height={300}
                    onUpdate={this.onScane}
                  />
                </div> :
                ""
            }
          </div>
          <div className='mt-3'></div>
          {this.state.data !== "Not Found" ? <this.renderSuccessScane /> : ""}
        </div>
      </>
    )
  }
}

TransactionOut = reduxForm({
  form: "formLogin",
  // validate: EBannerValidation,
  enableReinitialize: true
})(TransactionOut);

export default TransactionOut
