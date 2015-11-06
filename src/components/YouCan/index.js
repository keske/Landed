import React, { Component } from 'react';

/* component styles */
import styles from './styles';

export class YouCan extends Component {
  render() {
    return (
      <section className={ `${styles}` }>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              With Landed you can:
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-md-offset-2 col-lg-offset-2 text-center">
              <span className="icon" />
              <p>
                Pay less down than traditional ownership
              </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 text-center">
              <span className="icon" />
              <p>
                Stay as long as you want
              </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 text-center">
              <span className="icon" />
              <p>
                Do whatever to make a house your home
              </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 text-center">
              <span className="icon" />
              <p>
                Bring home that cute pup
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-md-offset-3 col-lg-offset-3 text-center">
              <span className="icon" />
              <p>
                Always have help to maintain your home
              </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 text-center">
              <span className="icon" />
              <p>
                Sublease to others
              </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 text-center">
              <span className="icon" />
              <p>
                Grow your wealth when home values rise
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
