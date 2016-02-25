import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import Rebase from 're-base';

export class Form extends Component {

  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  render() {
    const {
      fields: {
        name,
        auth,
        email,
        phone,
        photo,
      },
      handleSubmit,
    } = this.props;

    const submit = data => {
      const base = Rebase.createClass('https://dblanded.firebaseio.com');
      base.push('users/', {
        data,
        then() {
          console.log('User added');
        },
      });
    };

    return (
      <form onSubmit={handleSubmit(submit)}>
        <h3>Info</h3>

        <h4>Name</h4>
        <input type="text" {...name} />

        <h4>Auth details</h4>
        <input type="text" {...auth} />

        <h4>Email</h4>
        <input type="email" {...email} />

        <h4>Phone</h4>
        <input type="phone" {...phone} />

        <h4>Photo URL</h4>
        <input type="text" {...photo} />

        <button type="submit">
          Add
        </button>
      </form>
    );
  }
}

Form = reduxForm({
  form: 'addUser',
  fields: [
    'name',
    'auth',
    'email',
    'phone',
    'photo',
  ],
})(Form);

export default Form;
