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
              <span className="email-icon hidden-xs hidden-sm" />
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <span className="title">
                <span className="hidden-xs hidden-sm">
                  Leave your email to keep updated
                </span>
                <span className="hidden-md hidden-lg">
                  To follow us leave e-mail
                </span>
              </span>
            </div>
            <div className="col-xs-7 col-sm-7 col-md-4 col-lg-4">
              <input type="email"
                     placeholder="e-mail" />
            </div>
            <div className="col-xs-1 col-sm-1 col-md-3 col-lg-3">
              <button>
                <span className="hidden-xs hidden-sm">
                  keep me updated
                </span>
                <span className="hidden-md hidden-lg">
                  OK
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
