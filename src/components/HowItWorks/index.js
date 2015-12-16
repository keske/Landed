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
                Your broker helps you find the right home. Before you make an offer, we'll help estimate your on-going payments based on your ownership structure.
              </p>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
              <img src={ icons[1] } />
              <p className="paragraph green">
                2. You and your investors close.
              </p>
              <p className="paragraph">
                As soon as your offer is accepted, we'll step in to help you close.  We'll ensure all documents are signed and properly registered.
              </p>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
              <img src={ icons[2] } />
              <p className="paragraph green">
                3. You stay until you’re ready to leave
              </p>
              <p className="paragraph">
                We'll help you set up automated payments and walk you through your Landed services.  Welcome home!
              </p>
            </div>

          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <span className="price">
                $499  +  $19 / month
              </span>
              <hr className="price" />
              <span className="special">
                Holiday Special: <span className="free">$199 + $0/mth</span>
              </span>
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
