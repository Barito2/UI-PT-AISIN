import React, { Component } from 'react'
import Button from '../commons/Button'
import { Field, reduxForm } from "redux-form";
import { renderField } from '../commons/Field';

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div className='row'>
        <form onSubmit={handleSubmit} >
          <div class="form-group text-center col-12">
            <label for="npk" className='my-3'>
              <b> LOG IN </b>
            </label>
            <Field
              id="npk"
              type="text"
              name="npk"
              component={renderField}
              placeholder="NPK"
            />
            <Button
              hasShadow
              isPrimary
              className="btn mt-3"
              isLoading={false}
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

LoginForm = reduxForm({
  form: "formLogin",
  // validate: EBannerValidation,
  enableReinitialize: true
})(LoginForm);

export default LoginForm
