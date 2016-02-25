import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import Rebase from 're-base';

export class Form extends Component {

  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      userAdded: false,
    };
  }

  handleForm = () => {
    const { resetForm } = this.props;

    this.setState({
      userAdded: false,
    });

    resetForm;
  };

  render() {
    const {
      fields: {
        name,
        auth,
        email,
        phone,
        photo,
        address,
        photos,
        id,
        type,
        monthlyPayment,
      },
      handleSubmit,
    } = this.props;

    const { userAdded } = this.state;

    const submit = data => {
      const base = Rebase.createClass('https://dblanded.firebaseio.com');

      this.setState({
        userAdded: base.push('users/', {
          data,
          then() {
            return true;
          },
        }),
      });
    };

    const renderForm = () =>
      <form onSubmit={handleSubmit(submit)}>

        {/* house */}
        <h3>House</h3>

        <h4>Address</h4>
        <input type="text" {...address} />

        <h4>Photos</h4>
        <input type="text" {...photos} />

        {/* house */}
        <h3>Contract</h3>

        <h4>ID</h4>
        <input type="text" {...id} />

        <h4>Type</h4>
        <label>
          <input
            type="radio"
            {...type}
            value="dept"
            checked={type.value === 'dept'}
          /> Debt
        </label>
        <label>
          <input
            type="radio"
            {...type}
            value="deptFree"
            checked={type.value === 'deptFree'}
          /> Debt Free
        </label>
        <label>
          <input
            type="radio"
            {...type}
            value="equity"
            checked={type.value === 'equity'}
          /> Equity
        </label>

        <h4>Monthly payment</h4>
        <input type="text" {...monthlyPayment} />

        {/* info */}
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
      </form>;

    const renderSuccessState = () =>
      <div className="success">
        <h2>User added</h2>
        <p onClick={this.handleForm}>Add another</p>
      </div>;

    return (
      <section>
        {
          !userAdded
            ? renderForm()
            : renderSuccessState()
        }
      </section>
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
    'address',
    'photos',
    'id',
    'type',
    'monthlyPayment',
  ],
})(Form);

export default Form;
