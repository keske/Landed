import React, { Component } from 'react';
import R from 'ramda';
import { Link } from 'react-router';

/* component styles */
import styles from './styles';

/* images */
const icons = [];
R.forEach(name =>
  icons.push(require(`./files/how-${ name }.png`)),
  R.range(1, 3 + 1));

export class HowItWorks extends Component {
  render() {
    return (
      <section className={ `${styles}` }>
        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2 className="green">
                How does it work?
              </h2>
            </div>
          </div>

          <div className="row">

            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
              <img src={ icons[0] } />
              <p className="paragraph green">
                1. You find a home
              </p>
              <p className="paragraph">
                Your broker helps you find the right home. We help you make a cash offer and help you through the home buying process.
              </p>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
              <img src={ icons[1] } />
              <p className="paragraph green">
                2. We find co-investors
              </p>
              <p className="paragraph">
                You put down 5% of the sale price and take on a 20% mortgage. As soon as your offer is accepted, we select others to co-invest (not co-live) to cover the rest.
              </p>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
              <img src={ icons[2] } />
              <p className="paragraph green">
                3. You stay until you’re ready to sell
              </p>
              <p className="paragraph">
                You pay rent on the part of the home you don’t own, and can buy-out Landed at any time. When you decide to move, you split the revenues according to ownership shar
              </p>
            </div>

          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <a href="/#join" target="_blank">
                <span className="button">
                  Sign up to get started
                </span>
             </a>
            </div>
          </div>

        </div>
      </section>
    );
  }
}
