import React, { Component } from 'react';

/* component styles */
import styles from './styles';

export class TopImage extends Component {
  render() {
    return (
      <section className={ `${styles}` }>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-11 col-lg-11 col-md-offset-1 col-lg-offset-1">
              <h1>
                Split your homeinvestment,<br />
                not the space
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-11 col-lg-11 col-md-offset-1 col-lg-offset-1">
              <div className="group">
                <span className="icon" />
                <p>
                  Own 25% of your home’s value but get exclusive living rights.
                </p>
              </div>

              <div className="group">
                <span className="icon" />
                <p>
                  Pay expenses on the portion you own. Pay rent to co-investors on the rest.
                </p>
              </div>

              <div className="group">
                <span className="icon" />
                <p>
                  Get benefits of ownership with less risk, less debt, and fewer headaches.
                </p>
              </div>

              <span className="button">
                I want a home to live in
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
