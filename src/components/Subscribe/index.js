import React, { Component } from 'react';

/* component styles */
import styles from './styles';

export class Subscribe extends Component {
  render() {
    return (
      <section className={ `${styles}` }>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1 text-right">
              <span className="email-icon" />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <span className="title">
                Leave your email to keep updated
              </span>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <input type="email"
                     placeholder="e-mail" />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <button>
                keep me updated
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
