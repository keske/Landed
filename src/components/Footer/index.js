import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import styles from './styles';

export class Footer extends Component {
  render() {
    return (
      <section className={ `${styles}` }>
        <div className="container">
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2">
              <span className="logo" />
            </div>
            <div className="col-xs-8 col-sm-8 col-md-10 col-lg-10">
              <p className="title">
                Smarter ownership, for everyone.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2">
              <div className="social">
                <a href="https://twitter.com/landedhomes" className="twitter" />
                <a href="https://www.facebook.com/golanded" className="facebook" />
                <a href="http://instagram.com/landedhomes" className="instagram" />
              </div>
              <p className="copyright">
              Need to contact us? <a href="mailto:hi@landed.com">hi@landed.com</a><br />
                Copyright © Landed, Inc
                <br />
                Landed was founded in 2015 in the San Francisco Bay Area.
                <br />
                We believe everyone can be a homeowner.
                <Link to="about">
                  Discover how.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
