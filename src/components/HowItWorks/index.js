import React, { Component } from 'react';
import R from 'ramda';

/* component styles */
import styles from './styles';

/* images */
const icons = R.range(1, 3 + 1).map(index => require(`./files/how-${index}.png`));

export class HowItWorks extends Component {
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

          <div className="row">

            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
              <img src={ icons[0] } />
              <p className="paragraph green">
                1. Transaction support

              </p>
              <p className="paragraph">
                Landed helps you create, update and properly register your support structures to stay protected.  We also make sure your lender, insurance and title company are on board.
              </p>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
              <img src={ icons[1] } />
              <p className="paragraph green">
                2. Effortless payments

              </p>
              <p className="paragraph">
                Landed helps you assess prices, set-up recurring payments, and log everything to keep tax filings simple.  So easy you can set it & forget it, keeping your relationship smooth.
              </p>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
              <img src={ icons[2] } />
              <p className="paragraph green">
                3. Expert advisor

              </p>
              <p className="paragraph">
                A new home comes with new challenges.  We make sure you don't get taken advantage of when it comes to your biggest investment.
              </p>
            </div>

          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <span className="special">
                Concierge support for <span className="free">$99</span>
              </span>
              <span className="price">
                No fees until your documents are properly recorded
              </span>
              {/*<hr className="price" />*/}
              <a href="#join" target="_blank">
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
