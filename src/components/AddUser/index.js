import React, { Component } from 'react';
import Form from './form';

/* component styles */
import { styles } from './styles/styles.scss';

export class AddUser extends Component {

  render() {
    return (
      <section className={styles}>
        <div className="container">
          <div className="row">
            <div className="
              col-xs-12
              col-sm-12
              col-md-6 col-md-offset-2
              col-lg-6 col-lg-offset-2"
            >
              <h1>
                Create new user
              </h1>
              <Form />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
