import React, { Component } from 'react';
import R from 'ramda';

/* component styles */
import styles from './styles';

/* images */
const icons = [];
R.forEach(name =>
  icons.push(require(`./files/you-can-${ name }.png`)),
  R.range(1, 7 + 1));

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
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-md-offset-2 col-lg-offset-2 text-center">
              <img src={ icons[0] } />
              <p>
                Pay less down than traditional ownership
              </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 text-center">
              <img src={ icons[1] } />
              <p>
                Stay as long as you want
              </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 text-center">
              <img src={ icons[2] } />
              <p>
                Do whatever to make a house your home
              </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 text-center">
              <img src={ icons[3] } />
              <p>
                Bring home that cute pup
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-md-offset-3 col-lg-offset-3 text-center">
              <img src={ icons[4] } />
              <p>
                Always have help to maintain your home
              </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 text-center">
              <img src={ icons[5] } />
              <p>
                Sublease to others
              </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 text-center">
              <img src={ icons[6] } />
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
