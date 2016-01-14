import React, { Component } from 'react';

/* component styles */
import styles from './styles';

export class WeWillHelpYou extends Component {
  render() {
    return (
      <section className={ `${styles}` }>
        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2 className="green">
                How do we help?
              </h2>
            </div>
          </div>

        </div>
      </section>
    );
  }
}
