import React, { Component } from 'react';
import R from 'ramda';

/* component styles */
import styles from './styles';

/* images */
const icons = [];
R.forEach(name =>
  icons.push(require(`./files/${ name }.png`)),
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
                You put down 5% of the sale price and take on a 20% mortgage. As soon as your offer is accepted, we select others to co-invest in your home in small portions to cover the rest.
              </p>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
              <img src={ icons[2] } />
              <p className="paragraph green">
                3. You stay until you’re ready to sell
              </p>
              <p className="paragraph">
                We help manage the property and all co-investor interactions. You pay rent on the part of the home you don’t own, and rent rises fairly based on nearby house prices. When you decide to move and sale prices have gone up, you earn money on the portion of the home you own.

              </p>
            </div>

          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <span className="button">
                Start a process now
              </span>
            </div>
          </div>

        </div>
      </section>
    );
  }
}
