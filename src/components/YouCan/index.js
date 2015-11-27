import React, { Component } from 'react';
import R from 'ramda';

/* component styles */
import styles from './styles';

/* images */
const icons = R.range(1, 7 + 1).map(index => require(`./files/you-can-${index}.png`));

export class YouCan extends Component {
  render() {
    return (
      <section className={ `${styles}` }>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <span className="title">
                With Landed you can:
              </span>
            </div>
          </div>

          <div className="row">

            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <div className="row">
                <div className="col-xs-2 col-sm-2 col-md-12 col-lg-12 icon-col">
                  <img src={ icons[0] } />
                </div>
                <div className="col-xs-10 col-sm-10 col-md-12 col-lg-12 text-col">
                  <p>
                    Pay less down than traditional ownership
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <div className="row">
                <div className="col-xs-2 col-sm-2 col-md-12 col-lg-12 icon-col">
                  <img src={ icons[1] } />
                </div>
                <div className="col-xs-10 col-sm-10 col-md-12 col-lg-12 text-col">
                  <p>
                    Stay as long as&nbsp;you&nbsp;want
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <div className="row">
                <div className="col-xs-2 col-sm-2 col-md-12 col-lg-12 icon-col">
                  <img src={ icons[2] } />
                </div>
                <div className="col-xs-10 col-sm-10 col-md-12 col-lg-12 text-col">
                  <p>
                    Do whatever to make a house your home
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <div className="row">
                <div className="col-xs-2 col-sm-2 col-md-12 col-lg-12 icon-col">
                  <img src={ icons[3] } />
                </div>
                <div className="col-xs-10 col-sm-10 col-md-12 col-lg-12 text-col">
                  <p>
                    Bring home  that cute&nbsp;pup
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="row">

            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-md-offset-2 col-lg-offset-2">
              <div className="row">
                <div className="col-xs-2 col-sm-2 col-md-12 col-lg-12 icon-col">
                  <img src={ icons[4] } />
                </div>
                <div className="col-xs-10 col-sm-10 col-md-12 col-lg-12 text-col">
                  <p>
                    Always have help to maintain your home
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <div className="row">
                <div className="col-xs-2 col-sm-2 col-md-12 col-lg-12 icon-col">
                  <img src={ icons[5] } />
                </div>
                <div className="col-xs-10 col-sm-10 col-md-12 col-lg-12 text-col">
                  <p>
                    Sublease to others at any price
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <div className="row">
                <div className="col-xs-2 col-sm-2 col-md-12 col-lg-12 icon-col">
                  <img src={ icons[6] } />
                </div>
                <div className="col-xs-10 col-sm-10 col-md-12 col-lg-12 text-col">
                  <p>
                    Grow your wealth when home values rise
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}
