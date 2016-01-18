import React, { Component } from 'react';

/* component styles */
import { styles } from './styles/styles.scss';

export class Shared extends Component {
  render() {
    return (
      <section className={ `${styles}` }>
        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2 className="green">
                Forms of Support
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <p className="title">
                Family Loan
              </p>
              <p className="intro">
                Get structured loans from family to make a bigger down-payment.
              </p>

              <div className="benefits">
                <p className="header">
                  Benefits:
                </p>
                <p className="text">
                  <i>Resident Owner:</i> avoid mortgage insurance, get better rates and deduct the interest.
                </p>
                <p className="text">
                  <i>Investor:</i> a simple investment to support loved ones.
                </p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <p className="title">
                Lease To Own
              </p>
              <p className="intro">
                Commit to a long-term rental agreement, but with the ability to buy the entire home within a set period of time.
              </p>

              <div className="benefits">
                <p className="header">
                  Benefits:
                </p>
                <p className="text">
                  <i>Resident Owner:</i> get the home experience while saving for purchase.
                </p>
                <p className="text">
                  <i>Investor:</i> standard investment property with committed occupant.
                </p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <p className="title">
                Shared Ownership
              </p>
              <p className="intro">
                Split your home investment with a trusted friend or family member.
              </p>

              <div className="benefits">
                <p className="header">
                  Benefits:
                </p>
                <p className="text">
                  <i>Resident Owner:</i> pay expenses on the portion you own, pay rent on the rest.
                </p>
                <p className="text">
                  <i>Investor:</i> standard investment property with committed occupant.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <a href="#services" >
                <span className="button">
                  See how we can help
                </span>
              </a>
              <div className="different-structure">
                <a href="#join">
                  I’m thinking of a different structure, can you help?
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }
}
