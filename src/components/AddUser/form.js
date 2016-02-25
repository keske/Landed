import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import R from 'ramda';

export const validate = values => {
  const errors = {};

  if (R.isEmpty(values.firstName)) {
    errors.firstName = 'Required';
  }

  if (R.isEmpty(values.lastName)) {
    errors.lastName = 'Required';
  }

  if (R.isEmpty(values.password)) {
    errors.password = 'Required';
  }

  if (R.isEmpty(values.email)) {
    errors.email = 'Required';
  } else if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email';
  }

  return errors;
};

export class Form extends Component {

  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  render() {
    const {
      fields: {
        firstName,
      },
      handleSubmit,
    } = this.props;

    const submit = data => {
      console.log(data);
    };

    return (
      <form onSubmit={handleSubmit(submit)}>
        <h6>First name</h6>
        <input
          type="text"
          {...firstName}
          placeholder="First name"
        />
      </form>
    );
  }
}

Form = reduxForm({
  form: 'addPost',
  fields: [
    'firstName',
  ],
  validate,
})(Form);

export default Form;
