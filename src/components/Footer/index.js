import React, { Component } from 'react';

/* component styles */
import styles from './styles';

export class Footer extends Component {
  render() {
    return (
      <section className={ `${styles}` }>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
              <span className="logo" />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
              <p className="title">
                Smarter ownership, for everyone.
              </p>
              <div className="social">
                <a href="#" className="twitter" />
                <a href="#" className="facebook" />
                <a href="#" className="instagram" />
                <a href="#" className="linkedin" />
                <a href="#" className="pinterest" />
                <a href="#" className="google" />
              </div>
              <p className="copyright">
                Copyright © Landed, Inc
                <br />
                Landed was founded in 2015 in the San Francisco Bay Area.
                <br />
                We believe everyone can be an owner.
                <a href="#">Discover how.</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
